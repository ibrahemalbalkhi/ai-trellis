"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";
import { Copy } from "lucide-react";

export default function BookingSection() {
  const copyEmail = () => {
    navigator.clipboard.writeText("sales@aitrellis.com");
    toast.success("تم نسخ البريد الإلكتروني");
  };

  return (
    <section
      className="py-12 sm:py-20 lg:py-24 bg-neutral-lighter"
      id="booking"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-black mb-4 sm:mb-6">
            جاهز تبدأ؟
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1F2937' }}>
            احجز 30 دقيقة مجاناً. راح نفهم احتياجاتك ونقترح الحلول المناسبة
          </p>

          {/* Calendly Placeholder */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg mb-8 border-2 border-dashed border-neutral-light">
            <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] lg:h-96">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 opacity-30">📅</div>
              <p className="text-lg sm:text-xl text-neutral-medium font-medium mb-2">
                مساحة حجز التقويم
              </p>
              <p className="text-sm sm:text-base text-neutral-medium text-center max-w-md">
                {/* Calendly أو أي نظام حجز آخر يتم إضافته هنا */}
                سيتم إضافة أداة الحجز (Calendly أو غيرها) في هذا المكان
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <p className="text-base sm:text-lg text-neutral-dark">
              أو تواصل معنا مباشرة:
            </p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full
                         border-2 border-primary text-primary font-semibold
                         hover:bg-primary hover:text-white transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Copy size={18} />
              sales@aitrellis.com
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
