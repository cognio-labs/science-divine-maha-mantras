/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Facebook,
  BookOpen, 
  Shield, 
  Zap, 
  Compass, 
  Anchor, 
  Star,
  Menu,
  X,
  Youtube,
  Instagram
} from 'lucide-react';
import { DharmaChakra, LotusGeometry, SoundWave, MandalaGrid } from './components/SacredArt';
import authorImage from './images/author-image.png';
import bookCover from './images/book.jpeg';
import authorPortrait from './images/author-portrait-premium.png';

// --- Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Book', href: '#book' },
    { name: 'Chapters', href: '#chapters' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Author', href: '#author' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-maroon-dark/80 backdrop-blur-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <DharmaChakra className="w-8 h-8 text-gold" />
          <span className="font-serif text-xl tracking-widest uppercase text-parchment">Maha Mantras</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest text-parchment/60 hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => window.open('https://www.penguin.co.in/book/life-changing-maha-mantras/', '_blank')}
            className="px-6 py-2 bg-gold text-maroon-dark text-xs uppercase font-bold tracking-widest rounded-full"
          >
            Pre-Order
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-parchment" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-maroon-dark z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-parchment">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-parchment hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://www.penguin.co.in/book/life-changing-maha-mantras/', '_blank');
                }}
                className="mt-8 px-8 py-4 bg-gold text-maroon-dark text-lg uppercase font-bold tracking-widest rounded-full"
              >
                Pre-Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <div className="bg-maroon-dark">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden sacred-grid">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 py-16 md:py-20">
          
          {/* Left Content: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left order-2 lg:order-1 flex flex-col items-start"
          >
            <span className="text-gold uppercase tracking-[0.5em] text-xs mb-6 block font-bold">The Sacred Discipline</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-8 tracking-tight leading-tight md:leading-[0.9] text-parchment">
              Maha <span className="text-gold-gradient italic">Mantras</span>
            </h1>
            <p className="text-xl md:text-2xl text-parchment/60 font-light tracking-wide mb-12 max-w-lg">
              A structural blueprint for your consciousness. Discipline your mind. Awaken inner power.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button 
                onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-gold text-maroon-dark font-bold uppercase tracking-widest rounded-full shadow-xl shadow-gold/10 hover:scale-105 active:scale-95"
              >
                Pre-Order Now
              </button>
              <button 
                onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 border border-parchment/20 text-parchment font-bold uppercase tracking-widest rounded-full hover:bg-white/5 active:scale-95"
              >
                Register for event
              </button>
            </div>
          </motion.div>

          {/* Right Content: Author Portrait & Mandala (with Book in background) */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-center">
            <motion.div 
              style={{ y: y1, rotate }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-15 pointer-events-none flex items-center justify-center"
            >
              <div className="absolute w-1/3 h-1/3 rounded-full overflow-hidden blur-sm">
                <img src={bookCover} alt="" className="w-full h-full object-cover grayscale mix-blend-screen" />
              </div>
              <MandalaGrid className="w-full h-full text-gold" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative w-64 h-auto md:w-96"
            >
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
              <img 
                src={authorPortrait} 
                alt="Sakshi Shree" 
                className="relative w-full h-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AuthorSection = () => {
  return (
    <section id="author" className="py-20 md:py-32 px-4 md:px-6 text-parchment bg-maroon-dark relative overflow-hidden border-t border-gold/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        <div className="w-full md:w-5/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={authorPortrait} 
                alt="Sakshi Shree" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-4 border border-gold/20 rounded-2xl pointer-events-none" />
            </motion.div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold">The Enlightened Master</span>
            <h2 className="text-4xl md:text-7xl font-serif mb-8 text-parchment">Sakshi Shree</h2>
            <p className="text-xl text-parchment/70 font-light leading-relaxed mb-8">
              Born Rām Krishna Upādhyāya, Sakshi Shree is a rare triad: an enlightened master, a householder, and a former civil servant. 
              Mentored by Swami Sudarshanacharya Ji Maharaj, he bridges the gap between ancient Himalayan wisdom and the modern boardroom.
            </p>
            <p className="text-lg text-parchment/60 font-light leading-relaxed mb-12 italic border-l-4 border-gold/30 pl-8">
              "I do not teach any religion; I bring out the best of philosophies to enhance the lives of those I touch. 
              The battlefield of Kurukshetra has not disappeared—it has only multiplied. It now exists within every individual navigating ambition and conscience."
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
              <div className="w-12 h-px bg-gold" />
              <span className="font-serif italic text-xl text-gold/80">Guided by the Wisdom of the Gita</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AuthoritySection = () => null;
const ChaptersSection = () => null;
const BenefitsSection = () => null;

const Testimonials = () => {
  const reviews = [
    {
      name: "Rohan Sharma",
      role: "Tech Entrepreneur",
      text: "This book did for my focus what 10 years of meditation apps couldn't. It's a masterpiece of clarity.",
      stars: 5
    },
    {
      name: "Elena Gilbert",
      role: "Creative Director",
      text: "The aesthetic alone is worth it, but the content is life-changing. A truly premium experience.",
      stars: 5
    },
    {
      name: "Dr. Amit Varma",
      role: "Neuroscientist",
      text: "The way Vedant explains the science of sound vibration is both spiritually deep and scientifically sound.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-maroon-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg text-parchment/80 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-parchment">{review.name}</h4>
                <p className="text-xs uppercase tracking-widest text-gold/60 mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PreOrderSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="preorder" className="py-20 md:py-24 px-4 md:px-6 bg-maroon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LotusGeometry className="absolute -top-20 -right-20 w-[600px] h-[600px] text-gold" />
      </div>

      <div className="max-w-5xl mx-auto glass rounded-[40px] p-10 md:p-16 text-center relative z-10 border-gold/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-widest mb-8">
            Limited First Edition
          </span>
          <h2 className="text-4xl md:text-8xl font-serif mb-8 text-parchment">Reserve Your Legacy</h2>
          <p className="text-xl text-parchment/60 font-light mb-10 md:mb-12 max-w-2xl mx-auto">
            Pre-order the premium hardcover edition today and receive the exclusive 
            "Sacred Sound" digital companion and a hand-signed bookmark.
          </p>

          <div className="flex justify-center gap-4 md:gap-10 mb-10 md:mb-12">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-serif text-gold mb-2">{value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/40">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-baseline gap-4">
              <span className="text-parchment text-5xl font-serif">₹499</span>
            </div>
            <button 
              onClick={() => window.open('https://www.penguin.co.in/book/life-changing-maha-mantras/', '_blank')}
              className="w-full md:w-auto px-16 py-6 bg-gold text-maroon-dark font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-gold/20"
            >
              Reserve Your Copy Now
            </button>
            <p className="text-xs text-parchment/40 uppercase tracking-widest">
              Shipping worldwide starting April 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalImpact = () => {
  return (
    <section className="py-28 md:py-32 px-4 md:px-6 bg-maroon-dark relative flex items-center justify-center text-center">
      <div className="absolute inset-0 opacity-5">
        <MandalaGrid className="w-full h-full text-gold" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl relative z-10"
      >
        <h2 className="text-2xl md:text-6xl lg:text-7xl font-serif italic leading-tight text-parchment max-w-3xl mx-auto">
          “This is not just a book. <br />
          It is a discipline system for your mind.”
        </h2>
        <div className="mt-10 md:mt-12 flex justify-center">
          <LotusGeometry className="w-12 h-12 text-gold/20" />
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/sakshishreeofficial?igsh=MXY2dzN4MXU4MmYyMg==', color: 'hover:text-[#E4405F] hover:border-[#E4405F]' },
    { icon: <Youtube size={18} />, url: 'https://www.youtube.com/@sakshishree', color: 'hover:text-[#FF0000] hover:border-[#FF0000]' },
    { icon: <Facebook size={18} />, url: 'https://www.facebook.com/sakshishreeofficial/', color: 'hover:text-[#1877F2] hover:border-[#1877F2]' }
  ];

  return (
    <footer className="py-14 md:py-16 px-4 md:px-6 bg-white border-t border-maroon-dark/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="flex items-center gap-3">
            <DharmaChakra className="w-8 h-8 text-[#D4AF37]" />
            <span className="font-serif text-xl tracking-widest uppercase text-[#4A0404]">Maha Mantras</span>
          </div>
          
          <div className="flex gap-8 md:gap-10">
            {['Privacy', 'Terms', 'Shipping', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm uppercase tracking-wider text-[#4A0404]/70 hover:text-[#D4AF37] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border border-[#4A0404]/10 flex items-center justify-center text-[#4A0404]/60 transition-all ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-[#4A0404]/5">
          <p className="text-sm uppercase tracking-[0.25em] text-[#4A0404] font-medium">
            © 2026 <span className="text-[#D4AF37]">Maha Mantras Publishing</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const PreOrderModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true); // Reset loading state when opening
      // Inject script
      if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }

      // Prevent scrolling and fix text color visibility for the form
      document.body.style.overflow = 'hidden';
      document.body.style.color = '#4A0404';
      
      return () => {
        document.body.style.overflow = 'unset';
        document.body.style.color = '';
      };
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div 
        className="absolute inset-0 bg-maroon-dark/95 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gold/20 flex flex-col max-h-[95vh] overflow-y-auto text-maroon-dark"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 bg-maroon-dark/10 hover:bg-maroon-dark/20 rounded-full transition-colors text-maroon-dark"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="form-container relative min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-4 border-gold/20 border-t-gold rounded-full"
              />
            </div>
          )}
          <iframe
            onLoad={() => setIsLoading(false)}
            src="https://api.leadconnectorhq.com/widget/form/iheeRBxRvFxBrVakPUJC"
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none', 
              borderRadius: '8px',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
            id="inline-iheeRBxRvFxBrVakPUJC" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="maha mantras form "
            data-height="975"
            data-layout-iframe-id="inline-iheeRBxRvFxBrVakPUJC"
            data-form-id="iheeRBxRvFxBrVakPUJC"
            title="maha mantras form "
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const openPreOrder = () => window.open('https://www.penguin.co.in/book/life-changing-maha-mantras/', '_blank');
  
  return (
    <div className="bg-maroon-dark text-parchment selection:bg-gold/30">
      <Navbar onOpenModal={openPreOrder} />
      <HeroSection onOpenModal={openPreOrder} />
      <AuthorSection />
      <AuthoritySection />
      <ChaptersSection />
      <BenefitsSection />
      <Testimonials />
      <PreOrderSection onOpenModal={openPreOrder} />
      <FinalImpact />
      <Footer />
    </div>
  );
}
