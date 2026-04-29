import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, X } from 'lucide-react';
import sudhanshuImage from '../images/Sudhanshu_Trivedi.png';
import shamikaImage from '../images/Shamika Ravi.png';
import anandImage from '../images/Anand Ranganathan.png';
import amishImage from '../images/Amish Tripathi.png';

type Endorsement = {
  name: string;
  title: string;
  image: string;
  heading: string;
  text: string;
  badge: string;
  leftMetric: string;
  rightMetric: string;
  services: string;
};

const endorsements: Endorsement[] = [
  {
    name: 'Sudhanshu Trivedi',
    title: 'Member of Parliament (Rajya Sabha) & National Spokesperson, BJP',
    image: sudhanshuImage,
    heading: 'A Work of a Different Order',
    badge: 'Legacy',
    leftMetric: 'Deep wisdom',
    rightMetric: 'Practical living',
    services: 'Spiritual discipline, conscious action, self-awareness',
    text: `Anyone who has serious interest in India's intellectual and civilizational heritage will find this book Maha Mantras by Sakshi Shree as a work of a different order. It is not merely as one of the interpretations of Bhagwad Gita but distils it into a contemporary context through ten actionable, life-altering principles. From the courage of Svadharma to the equanimity of Samatva Yoga.`
  },
  {
    name: 'Anand Ranganathan',
    title: 'Scientist and Author',
    image: anandImage,
    heading: 'A Remarkable, Revolutionary Work',
    badge: 'Insight',
    leftMetric: 'Inner freedom',
    rightMetric: 'Living wisdom',
    services: 'Direct transmission, modern context, deep contemplation',
    text: `"In Living the Gita, Guru Sakshi Shree carries forward a vibrant and genuine chain of spiritual transmission, having trained directly under the revered master Sadguru Sudarshanacharya. What sets him apart so strikingly today, is that he extends well past any inherited tradition. His philosophy rests in his remarkable fusion of deep inner realisation with active daily living, pointing toward total inner freedom paired with wholehearted involvement in the outer world."`
  },
  {
    name: 'Amish Tripathi',
    title: 'Bestselling Author and Former Diplomat',
    image: amishImage,
    heading: 'Wisdom Out of the Puja Room',
    badge: 'Impact',
    leftMetric: 'Modern relevance',
    rightMetric: 'Timeless truth',
    services: 'Accessible philosophy, actionable practice, grounded spirituality',
    text: `In this powerful and practical book, Guruji Sakshi Shree does something very rare: he brings the eternal wisdom of the Gita out of the puja room and plants it firmly in the messy battlefield of modern life. Each maha mantra is not a slogan to be memorized, but a tool for living - whether you are a student confused about your path, a householder juggling responsibilities, or a seeker struggling with inner turmoil.`
  },
  {
    name: 'Shamika Ravi',
    title: 'Senior Economist & Member of EAC-PM',
    image: shamikaImage,
    heading: 'Timely and Inspiring Work',
    badge: 'Clarity',
    leftMetric: 'Modern life',
    rightMetric: 'Ancient wisdom',
    services: 'Human consciousness, inner mastery, purposeful living',
    text: `'Living the Gita in the Twenty-First Century' is a timely and inspiring work that brings the eternal wisdom of the Bhagavad Gita into the heart of modern life. Sakshi Shree presents the Gita not merely as scripture, but as a practical science of human consciousness, offering clarity in an age of stress, speed, and distraction.`
  }
];

export default function EndorsementsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedEndorsement, setSelectedEndorsement] = useState<Endorsement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % endorsements.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const activeEndorsement = endorsements[activeIndex];

  const goTo = (nextIndex: number) => {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  };

  return (
    <section className="py-24 md:py-32 bg-maroon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold italic">Endorsements</span>
          <h2 className="text-4xl md:text-7xl font-serif text-parchment leading-tight">
            Voice of <span className="text-gold italic">Authority</span>
          </h2>
          <p className="mt-5 text-parchment/50 text-sm uppercase tracking-[0.28em]">
            Auto-sliding testimonials from respected voices
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={activeEndorsement.name}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 90 : -90, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -90 : 90, scale: 0.98 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              onClick={() => setSelectedEndorsement(activeEndorsement)}
              className="group relative cursor-pointer overflow-hidden rounded-[18px] md:rounded-[24px] border border-[#e9ecef] bg-[#fbfaf8] text-[#1f4b53] shadow-[0_22px_60px_rgba(0,0,0,0.20)] min-h-[520px] md:min-h-[500px]"
            >
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#eaf2f2] translate-x-1/2 -translate-y-1/2 opacity-90" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,250,248,0.96))]" />

              <div className="relative z-10 h-full p-5 md:p-7 lg:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-[3px] border-[#57b4ab] shadow-[0_6px_16px_rgba(0,0,0,0.12)] shrink-0">
                      <img src={activeEndorsement.image} alt={activeEndorsement.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[#183f46] font-semibold text-sm md:text-base leading-tight">
                        {activeEndorsement.name}
                      </p>
                      <p className="text-[#54a69f] text-xs md:text-sm leading-tight mt-1">
                        {activeEndorsement.title}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center rounded-full bg-[#eff6f5] px-4 py-2 text-xs font-medium text-[#54a69f]">
                    {activeEndorsement.badge}
                  </span>
                </div>

                <div className="py-8 md:py-10">
                  <div className="flex justify-center mb-6 md:mb-8">
                    <Quote size={42} className="text-[#8ad0ca] md:w-12 md:h-12" strokeWidth={1.8} />
                  </div>

                  <p className="text-center text-[#224f58] italic text-[17px] md:text-[21px] leading-[1.55] md:leading-[1.6] max-w-4xl mx-auto px-1 md:px-10">
                    {activeEndorsement.text}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">
                    <div className="rounded-[14px] bg-[#eef4f4] px-5 py-5 md:px-6 md:py-6 text-center">
                      <p className="text-xs text-[#89a9ad] mb-2">Key Result</p>
                      <p className="text-[#3f968f] font-semibold text-base md:text-lg">{activeEndorsement.leftMetric}</p>
                    </div>
                    <div className="rounded-[14px] bg-[#eef4f4] px-5 py-5 md:px-6 md:py-6 text-center">
                      <p className="text-xs text-[#89a9ad] mb-2">Impact</p>
                      <p className="text-[#3f968f] font-semibold text-base md:text-lg">{activeEndorsement.rightMetric}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#dce6e6]">
                  <p className="text-[11px] text-[#6f8f93] uppercase tracking-[0.18em] text-center mb-3">
                    Services Provided
                  </p>
                  <p className="text-center text-[#204b54] text-sm md:text-base font-medium">
                    {activeEndorsement.services}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEndorsement(activeEndorsement);
                  }}
                  className="absolute right-5 md:right-7 top-16 md:top-20 text-[#58aea7] text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  Read More →
                </button>
              </div>

              <div className="absolute left-4 md:left-5 bottom-4 md:bottom-5 flex items-center gap-2">
                {endorsements.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'w-8 bg-[#58aea7]' : 'w-2.5 bg-[#cddddd]'
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="absolute right-4 md:right-5 bottom-4 md:bottom-5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(-1);
                    setActiveIndex((current) => (current - 1 + endorsements.length) % endorsements.length);
                  }}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-[#dde5e5] shadow-sm flex items-center justify-center text-[#58aea7] hover:bg-[#f3f8f8]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(1);
                    setActiveIndex((current) => (current + 1) % endorsements.length);
                  }}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-[#dde5e5] shadow-sm flex items-center justify-center text-[#58aea7] hover:bg-[#f3f8f8]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedEndorsement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6"
          >
            <div
              className="absolute inset-0 bg-maroon-dark/98 backdrop-blur-md"
              onClick={() => setSelectedEndorsement(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedEndorsement(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-maroon-dark/10 hover:bg-maroon-dark/20 rounded-full text-maroon-dark"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                <img
                  src={selectedEndorsement.image}
                  alt={selectedEndorsement.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark md:bg-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:hidden">
                  <h3 className="text-white font-serif text-3xl mb-1">{selectedEndorsement.name}</h3>
                  <p className="text-gold text-xs uppercase tracking-widest">{selectedEndorsement.title}</p>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-12 overflow-y-auto text-maroon-dark custom-scrollbar">
                <div className="hidden md:block mb-8">
                  <h3 className="text-4xl font-serif mb-2">{selectedEndorsement.name}</h3>
                  <p className="text-gold-muted text-sm uppercase tracking-[0.2em] font-medium">{selectedEndorsement.title}</p>
                  <div className="w-20 h-px bg-gold/30 mt-6" />
                </div>

                <h4 className="text-2xl font-serif italic text-maroon mb-8 leading-tight">
                  "{selectedEndorsement.heading}"
                </h4>

                <div className="space-y-6 text-maroon-dark/80 text-lg leading-relaxed font-light">
                  {selectedEndorsement.text.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
