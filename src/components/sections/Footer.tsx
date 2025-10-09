"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const copyEmail = () => {
    navigator.clipboard.writeText("sales@aitrellis.com");
    toast.success("تم نسخ البريد الإلكتروني");
  };

  return (
    <footer className="bg-neutral-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AI Trellis"
              width={48}
              height={48}
              className="h-12 w-12 object-contain brightness-0 invert"
            />
            <span className="text-2xl font-bold">AI Trellis</span>
          </div>

          {/* Description */}
          <p className="text-lg text-white/80 max-w-2xl">
            AI Trellis - حلول الذكاء الاصطناعي للأعمال في السعودية
          </p>

          {/* Email */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full
                       hover:bg-white/20 transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Mail size={20} />
            <span className="font-medium">sales@aitrellis.com</span>
          </button>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-white/20" />

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © 2025 AI Trellis. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
