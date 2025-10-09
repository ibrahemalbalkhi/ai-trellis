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
      className="py-20 sm:py-24 lg:py-32 bg-neutral-bg-light"
      id="booking"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-black mb-6">
            جاهز تبدأ؟
          </h2>

          <p className="text-lg sm:text-xl text-neutral-gray-dark mb-12 leading-relaxed">
            احجز 30 دقيقة مجاناً. راح نفهم احتياجاتك ونقترح الحلول المناسبة
          </p>

          {/* Calendly Placeholder */}
          <div className="bg-white rounded-3xl p-12 shadow-lg mb-8 border-2 border-dashed border-neutral-gray-light">
            <div className="flex flex-col items-center justify-center h-96">
              <div className="text-6xl mb-6 opacity-30">📅</div>
              <p className="text-xl text-neutral-gray-medium font-medium mb-2">
                مساحة حجز التقويم
              </p>
              <p className="text-neutral-gray-medium text-center max-w-md">
                {/* Calendly أو أي نظام حجز آخر يتم إضافته هنا */}
                سيتم إضافة أداة الحجز (Calendly أو غيرها) في هذا المكان
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-lg text-neutral-gray-dark">
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
