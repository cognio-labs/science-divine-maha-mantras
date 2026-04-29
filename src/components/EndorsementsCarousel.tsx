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
};

const endorsements: Endorsement[] = [
  {
    name: 'Sudhanshu Trivedi',
    title: 'Member of Parliament (Rajya Sabha) and National Spokesperson, Bharatiya Janata Party (BJP)',
    image: sudhanshuImage,
    heading: 'A Work of a Different Order',
    badge: 'Legacy',
    text: `Anyone who has serious interest in India's intellectual and civilizational heritage will find this book Maha Mantras by Sakshi Shree as a work of a different order. It is not merely as one of the interpretations of Bhagwad Gita but distils it into a contemporary context through ten actionable, life-altering principles. From the courage of Svadharma to the equanimity of Samatva Yoga.

The book put forth the pragmatic path to unfolding Shrimad Bhagwad Gita's subtle substance: live consciously, act without attachment, and awaken to who you already are. In the final chapter where Sakshi Shree suggests Sakshi Sadhna, a fivefold meditative system that can be followed in the chaotic hustle and bustle of modern life Srimad Bhagwad Gita is a unique guide which shows the entire mankind how to be actively performing your duties in the world without getting attracted to it, which is called Drishta Bhav or Sakshi Bhav.

I hope that the readers will find the visualisation of this eternal enlightenment of Srimad Bhagwad Gita's Sakshi Bhav with a pragmatic meditative manifestation required in rapidly changing and spiritually depleting modern society.

Dr. Sudhanshu Trivedi
Member of Parliament (Rajya Sabha)
National Spokesperson,
Bharatiya Janata Party (BJP)`
  },
  {
    name: 'Anand Ranganathan',
    title: 'Scientist and Author',
    image: anandImage,
    heading: 'A Remarkable, Revolutionary Work',
    badge: 'Insight',
    text: `In Living the Gita, Guru Sakshi Shree carries forward a vibrant and genuine chain of spiritual transmission, having trained directly under the revered master Sadguru Sudarshanacharya. What sets him apart so strikingly today, is that he extends well past any inherited tradition. His philosophy rests in his remarkable fusion of deep inner realisation with active daily living, pointing toward total inner freedom paired with wholehearted involvement in the outer world. This principle mirrors the Gita's core guidance, not as distant theory, but as a way of being he has personally embodied. A remarkable, revolutionary work.

- Anand Ranganathan, Scientist and Author`
  },
  {
    name: 'Amish Tripathi',
    title: 'Bestselling Author, Award-Winning Broadcaster and Former Diplomat',
    image: amishImage,
    heading: 'Wisdom Out of the Puja Room',
    badge: 'Impact',
    text: `In this powerful and practical book, Guruji Sakshi Shree does something very rare: he brings the eternal wisdom of the Gita out of the puja room and plants it firmly in the messy battlefield of modern life. Each maha mantra is not a slogan to be memorized, but a tool for living - whether you are a student confused about your path, a householder juggling responsibilities, or a seeker struggling with inner turmoil.

Especially compelling to me was Guruji Sakshi Shree's peerless ability to unpack profound ideas like svadharma, nishkama karma, surrender and gunatita consciousness with the clarity of a modern teacher and the depth of an ancient rishi. He refuses both shallow ritualism and dry intellectualism, and instead shows how the Gita can become a living science of inner transformation - accessible to all, irrespective of religion, background or profession. The ten maha mantras do not ask you to escape the world; they teach you how to stand differently within it: rooted in your own being, yet fully engaged with life.

In an age of information overload, anxiety and identity confusion, this book is a calm voice of dharma cutting through the noise. It reminds us that true spirituality is not about escaping to caves, but discovering stillness in the middle of our personal Kurukshetra. Read this book slowly, reflect on it deeply, and most importantly, practise even a little of what it suggests. Your outer life may remain the same - but your inner experience of it will become infinitely more powerful.
- Amish is a bestselling author, award-winning broadcaster and former diplomat.`
  },
  {
    name: 'Shamika Ravi',
    title: 'Senior Economist and Member of the Economic Advisory Council to the Prime Minister of India',
    image: shamikaImage,
    heading: 'Timely and Inspiring Work',
    badge: 'Clarity',
    text: `'Living the Gita in the Twenty-First Century' is a timely and inspiring work that brings the eternal wisdom of the Bhagavad Gita into the heart of modern life. Sakshi Shree presents the Gita not merely as scripture, but as a practical science of human consciousness, offering clarity in an age of stress, speed, and distraction. Through the ten Maha Mantras, he makes profound ideas such as Swadharma, Nishkama Karma, surrender, meditation, and awareness accessible to today's reader. Deeply spiritual yet refreshingly practical, this book is a powerful guide to inner mastery, purposeful living, and conscious transformation.

Dr Shamika Ravi
Senior Economist and Member of the Economic Advisory Council to the Prime Minister of India`
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
    }, 3600);
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

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={activeEndorsement.name}
              custom={direction}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedEndorsement(activeEndorsement)}
              className="group relative cursor-pointer overflow-hidden rounded-[30px] md:rounded-[36px] border-[4px] border-[#4aa5b8] bg-[#fbfbf9] text-[#1f4b53] shadow-[0_22px_60px_rgba(0,0,0,0.16)] min-h-[380px] md:min-h-[400px]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,249,247,0.95))]" />

              <div className="relative z-10 h-full px-4 md:px-6 pt-6 md:pt-7 pb-5 md:pb-6 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3 md:gap-5">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-[4px] border-[#57b4ab] shadow-[0_8px_16px_rgba(0,0,0,0.10)] shrink-0 bg-white -mt-2 md:-mt-3">
                      <img
                        src={activeEndorsement.image}
                        alt={activeEndorsement.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[#183f46] font-semibold text-sm md:text-[0.98rem] leading-tight">
                        {activeEndorsement.name}
                      </p>
                      <p className="text-[#54a69f] text-[11px] md:text-xs leading-tight mt-1 max-w-[180px]">
                        {activeEndorsement.title}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center rounded-full bg-[#eff6f5] px-4 py-2 text-xs font-medium text-[#54a69f]">
                    {activeEndorsement.badge}
                  </span>
                </div>

                <div className="relative py-5 md:py-6">
                  <div className="absolute right-0 top-2 md:top-3">
                    <Quote size={32} className="text-[#d3e8ea]" strokeWidth={1.6} />
                  </div>

                  <p className="text-center text-[#224f58] italic text-[14px] md:text-[16px] leading-[1.55] md:leading-[1.6] max-w-3xl mx-auto px-1 md:px-10 pt-6 md:pt-4">
                    {activeEndorsement.text}
                  </p>
                </div>

                <div className="pt-4 md:pt-5 border-t border-[#dce6e6]">
                  <p className="text-[10px] text-[#6f8f93] uppercase tracking-[0.22em] text-center mb-2 md:mb-3">
                    Full Testimonial
                  </p>
                  <p className="text-center text-[#204b54] text-[13px] md:text-sm font-medium">
                    {activeEndorsement.heading}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEndorsement(activeEndorsement);
                  }}
                  className="absolute right-4 md:right-6 top-14 md:top-16 text-[#58aea7] text-[11px] font-semibold uppercase tracking-[0.18em]"
                >
                  Read More →
                </button>
              </div>

              <div className="absolute left-4 md:left-5 bottom-3 md:bottom-4 flex items-center gap-2">
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

              <div className="absolute right-4 md:right-5 bottom-3 md:bottom-4 flex items-center gap-2">
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
