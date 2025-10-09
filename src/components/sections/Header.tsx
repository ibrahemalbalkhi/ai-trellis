"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-neutral-gray-light shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* CTA Button - Right side in RTL */}
          <button
            onClick={scrollToBooking}
            className={cn(
              "px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-200",
              "bg-gradient-to-br from-primary to-secondary-dark text-white",
              "hover:shadow-lg hover:scale-105 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            aria-label="احجز استشارة مجانية"
          >
            احجز استشارة
          </button>

          {/* Logo - Left side in RTL */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt="AI Trellis"
              width={48}
              height={48}
              priority
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-black">
              AI Trellis
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
