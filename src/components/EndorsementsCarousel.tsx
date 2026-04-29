import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
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
  const [selectedEndorsement, setSelectedEndorsement] = useState<Endorsement | null>(null);

  return (
    <section className="py-24 md:py-32 bg-maroon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold italic">Endorsements</span>
          <h2 className="text-4xl md:text-7xl font-serif text-parchment leading-tight">
            Voice of <span className="text-gold italic">Authority</span>
          </h2>
          <p className="mt-5 text-parchment/50 text-sm uppercase tracking-[0.28em]">
            Four respected voices, presented as cards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {endorsements.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedEndorsement(item)}
              className="group cursor-pointer relative overflow-hidden rounded-[2.25rem] border border-gold/20 bg-[#f6efe6] text-[#4A0404] shadow-[0_28px_70px_rgba(0,0,0,0.25)] min-h-[340px] md:min-h-[360px]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.40),rgba(255,255,255,0.06))]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-5">
                  <div className={`flex-1 ${idx % 2 === 0 ? 'order-2 text-right' : 'order-1 text-left'}`}>
                    <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight">{item.name}</h3>
                    <p className="text-gold-muted text-[10px] md:text-xs uppercase tracking-[0.24em] font-bold mt-1">
                      {item.heading}
                    </p>
                  </div>

                  <div className={`w-[76px] h-[76px] md:w-[88px] md:h-[88px] overflow-hidden rounded-2xl border border-gold/40 bg-[#efe6d8] shadow-md shrink-0 ${idx % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-3xl text-gold/40 font-serif leading-none mb-4">“</p>
                  <p className="text-[#4A0404]/75 text-base md:text-lg font-light leading-relaxed italic line-clamp-4">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#4A0404]/10 flex items-center justify-between gap-4">
                  <span className="text-[#4A0404]/45 text-[10px] uppercase tracking-[0.32em] font-medium">
                    Full Testimonial
                  </span>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">
                    Read More →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
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
