"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparison = {
  consulting: [
    { text: "نقدم توصيات واستراتيجيات", hasIt: false },
    { text: "نبني ونطور الأنظمة", hasIt: false },
    { text: "ندرب الفريق عملياً", hasIt: false },
    { text: "ندعم ونتابع النتائج", hasIt: false },
  ],
  implementation: [
    { text: "نقدم توصيات واستراتيجيات", hasIt: true },
    { text: "نبني ونطور الأنظمة", hasIt: true },
    { text: "ندرب الفريق عملياً", hasIt: true },
    { text: "ندعم ونتابع النتائج", hasIt: true },
  ],
};

export default function ImplementationSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-black mb-4">
            ما نستشير بس، احنا ننفذ
          </h2>
          <p className="text-xl text-neutral-gray-dark max-w-3xl mx-auto">
            الفرق بيننا وبين الاستشاريين التقليديين
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Traditional Consulting */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-neutral-bg-light rounded-3xl p-8 border-2 border-neutral-gray-light relative">
              {/* Label */}
              <div className="absolute -top-4 right-8 bg-neutral-gray-medium text-white px-4 py-2 rounded-full text-sm font-bold">
                الاستشاريون التقليديون
              </div>

              {/* Content */}
              <div className="mt-6 space-y-4">
                {comparison.consulting.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-neutral-gray-dark"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <X size={16} className="text-red-500" />
                    </div>
                    <span className="line-through opacity-60">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-6 pt-6 border-t border-neutral-gray-light">
                <p className="text-sm text-neutral-gray-medium italic">
                  &quot;نعطيك خطة، وأنت تنفذها بنفسك&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Our Implementation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border-2 border-primary/30 relative">
              {/* Label */}
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                AI Trellis
              </div>

              {/* Content */}
              <div className="mt-6 space-y-4">
                {comparison.implementation.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-neutral-black"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center">
                      <Check size={16} className="text-accent-green font-bold" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-sm font-bold text-primary">
                  &quot;نبني لك الحل، ندرب فريقك، ونتابع معك للنجاح&quot;
                </p>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent-green to-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
              هذا نهجنا
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-br from-neutral-bg-light to-white rounded-2xl px-8 py-6 border border-neutral-gray-light shadow-lg">
            <p className="text-lg font-semibold text-neutral-black">
              ما نعطيك تقرير وننساك. نشتغل معك لين تحقق النتائج
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
