import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';
import { MandalaGrid } from './SacredArt';
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
};

const endorsements: Endorsement[] = [
  {
    name: 'Sudhanshu Trivedi',
    title: 'Member of Parliament (Rajya Sabha) & National Spokesperson, BJP',
    image: sudhanshuImage,
    heading: 'A Work of a Different Order',
    text: `Anyone who has serious interest in India's intellectual and civilizational heritage will find this book Maha Mantras by Sakshi Shree as a work of a different order. It is not merely as one of the interpretations of Bhagwad Gita but distils it into a contemporary context through ten actionable, life-altering principles. From the courage of Svadharma to the equanimity of Samatva Yoga.

The book put forth the pragmatic path to unfolding Shrimad Bhagwad Gita's subtle substance: live consciously, act without attachment, and awaken to who you already are. In the final chapter where Sakshi Shree suggests Sakshi Sadhna, a fivefold meditative system that can be followed in the chaotic hustle and bustle of modern life Srimad Bhagwad Gita is a unique guide which shows the entire mankind how to be actively performing your duties in the world without getting attracted to it, which is called Drishta Bhav or Sakshi Bhav.

I hope that the readers will find the visualisation of this eternal enlightenment of Srimad Bhagwad Gita's Sakshi Bhav with a pragmatic meditative manifestation required in rapidly changing and spiritually depleting modern society.`
  },
  {
    name: 'Anand Ranganathan',
    title: 'Scientist and Author',
    image: anandImage,
    heading: 'A Remarkable, Revolutionary Work',
    text: `"In Living the Gita, Guru Sakshi Shree carries forward a vibrant and genuine chain of spiritual transmission, having trained directly under the revered master Sadguru Sudarshanacharya. What sets him apart so strikingly today, is that he extends well past any inherited tradition. His philosophy rests in his remarkable fusion of deep inner realisation with active daily living, pointing toward total inner freedom paired with wholehearted involvement in the outer world. This principle mirrors the Gita's core guidance, not as distant theory, but as a way of being he has personally embodied. A remarkable, revolutionary work."`
  },
  {
    name: 'Amish Tripathi',
    title: 'Bestselling Author and Former Diplomat',
    image: amishImage,
    heading: 'Wisdom Out of the Puja Room',
    text: `In this powerful and practical book, Guruji Sakshi Shree does something very rare: he brings the eternal wisdom of the Gita out of the puja room and plants it firmly in the messy battlefield of modern life. Each maha mantra is not a slogan to be memorized, but a tool for living - whether you are a student confused about your path, a householder juggling responsibilities, or a seeker struggling with inner turmoil.

Especially compelling to me was Guruji Sakshi Shree's peerless ability to unpack profound ideas like svadharma, nishkama karma, surrender and gunatita consciousness with the clarity of a modern teacher and the depth of an ancient rishi. He refuses both shallow ritualism and dry intellectualism, and instead shows how the Gita can become a living science of inner transformation - accessible to all, irrespective of religion, background or profession. The ten maha mantras do not ask you to escape the world; they teach you how to stand differently within it: rooted in your own being, yet fully engaged with life.

In an age of information overload, anxiety and identity confusion, this book is a calm voice of dharma cutting through the noise. It reminds us that true spirituality is not about escaping to caves, but discovering stillness in the middle of our personal Kurukshetra. Read this book slowly, reflect on it deeply, and most importantly, practise even a little of what it suggests. Your outer life may remain the same - but your inner experience of it will become infinitely more powerful.`
  },
  {
    name: 'Shamika Ravi',
    title: 'Senior Economist & Member of EAC-PM',
    image: shamikaImage,
    heading: 'Timely and Inspiring Work',
    text: `'Living the Gita in the Twenty-First Century' is a timely and inspiring work that brings the eternal wisdom of the Bhagavad Gita into the heart of modern life. Sakshi Shree presents the Gita not merely as scripture, but as a practical science of human consciousness, offering clarity in an age of stress, speed, and distraction. Through the ten Maha Mantras, he makes profound ideas such as Swadharma, Nishkama Karma, surrender, meditation, and awareness accessible to today's reader. Deeply spiritual yet refreshingly practical, this book is a powerful guide to inner mastery, purposeful living, and conscious transformation.`
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
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const activeEndorsement = endorsements[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-maroon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <MandalaGrid className="w-full h-full text-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold italic">Endorsements</span>
          <h2 className="text-4xl md:text-7xl font-serif text-parchment leading-tight">
            Voice of <span className="text-gold italic">Authority</span>
          </h2>
          <p className="mt-5 text-parchment/50 text-sm uppercase tracking-[0.28em]">
            Auto-sliding testimonials from respected voices
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={activeEndorsement.name}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                onClick={() => setSelectedEndorsement(activeEndorsement)}
                className="relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-gold/20 bg-[#f6efe6] text-[#4A0404] shadow-[0_30px_80px_rgba(0,0,0,0.35)] min-h-[420px] md:min-h-[480px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(74,4,4,0.06),_transparent_30%)]" />

                <div className="relative z-10 p-6 md:p-10 lg:p-12 flex h-full flex-col justify-between">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className={`flex items-center gap-4 ${activeIndex % 2 === 0 ? 'order-1' : 'order-2'}`}>
                        <div className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-full border-2 border-gold/80 bg-[#efe6d8] p-1 shadow-lg overflow-hidden shrink-0">
                          <img
                            src={activeEndorsement.image}
                            alt={activeEndorsement.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className={`hidden sm:block ${activeIndex % 2 === 0 ? 'text-left' : 'text-right'}`}>
                          <p className="font-serif text-2xl md:text-3xl text-[#4A0404]">{activeEndorsement.name}</p>
                          <p className="text-gold-muted text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mt-1">
                            {activeEndorsement.heading}
                          </p>
                        </div>
                      </div>

                      <div className={`hidden sm:flex flex-col items-end gap-3 ${activeIndex % 2 === 0 ? 'order-2' : 'order-1 items-start'}`}>
                        <span className="inline-flex items-center rounded-full border border-gold/25 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#4A0404]/70">
                          Featured Review
                        </span>
                        <div className="flex gap-1 text-gold">
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <Star key={starIdx} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="sm:hidden">
                      <p className="font-serif text-2xl text-[#4A0404]">{activeEndorsement.name}</p>
                      <p className="text-gold-muted text-[11px] uppercase tracking-[0.24em] mt-1 font-bold">
                        {activeEndorsement.heading}
                      </p>
                    </div>

                    <div className="max-w-4xl">
                      <p className="text-3xl text-gold/50 font-serif leading-none mb-4">“</p>
                      <p className="text-[#4A0404]/75 text-lg md:text-xl font-light leading-relaxed italic line-clamp-5 md:line-clamp-4">
                        {activeEndorsement.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between gap-4 pt-5 border-t border-[#4A0404]/10">
                      <span className="text-[#4A0404]/45 text-[10px] uppercase tracking-[0.32em] font-medium">Full Testimonial</span>
                      <span className="text-gold text-xs font-bold uppercase tracking-widest">Read More →</span>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        {endorsements.map((item, idx) => (
                          <button
                            key={item.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              setDirection(idx > activeIndex ? 1 : -1);
                              setActiveIndex(idx);
                            }}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              idx === activeIndex ? 'w-10 bg-gold' : 'w-2.5 bg-[#4A0404]/20'
                            }`}
                            aria-label={`Show testimonial ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDirection(-1);
                            setActiveIndex((current) => (current - 1 + endorsements.length) % endorsements.length);
                          }}
                          className="h-11 w-11 rounded-full border border-[#4A0404]/10 bg-white/80 text-[#4A0404] flex items-center justify-center hover:border-gold/30 hover:text-gold transition-colors"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDirection(1);
                            setActiveIndex((current) => (current + 1) % endorsements.length);
                          }}
                          className="h-11 w-11 rounded-full border border-[#4A0404]/10 bg-white/80 text-[#4A0404] flex items-center justify-center hover:border-gold/30 hover:text-gold transition-colors"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
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
