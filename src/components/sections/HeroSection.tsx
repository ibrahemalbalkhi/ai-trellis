"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/patterns/pattern-grid.svg)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Abstract Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 sm:w-96 sm:h-96 opacity-40"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/backgrounds/abstract-element-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 sm:w-72 sm:h-72 opacity-30"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/backgrounds/abstract-element-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 w-40 h-40 sm:w-56 sm:h-56 opacity-20"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/backgrounds/abstract-element-3.svg"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          الذكاء الاصطناعي يشتغل.
          <br />
          أنت تركز على النمو
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          نبني لك أنظمة ذكية تفهم السوق السعودي. من التسويق للأتمتة، كلها بالذكاء
          الاصطناعي
        </motion.p>

        <motion.button
          onClick={scrollToBooking}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary-dark font-bold text-base sm:text-lg rounded-full
                     shadow-2xl hover:shadow-accent-green/50 hover:scale-105
                     transition-all duration-300 focus:outline-none focus:ring-2
                     focus:ring-white focus:ring-offset-4 focus:ring-offset-primary-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          احجز وقت - 30 دقيقة مجاناً
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
