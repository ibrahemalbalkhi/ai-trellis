"use client";

import { motion } from "framer-motion";

const whyPoints = [
  {
    title: "فهم السوق المحلي",
    description:
      "نشتغل بالعربي، نفهم السوق السعودي، ونعرف التحديات المحلية",
    gradient: "from-primary to-primary-light",
  },
  {
    title: "من الاستراتيجية للتنفيذ",
    description:
      "ما نكتفي بالكلام. نبني الأنظمة، ندرب فريقك، ونتابع النتائج",
    gradient: "from-secondary-dark to-secondary",
  },
  {
    title: "تقنية + خبرة",
    description:
      "نستخدم أحدث تقنيات الذكاء الاصطناعي مع فهم عميق لاحتياجات الأعمال",
    gradient: "from-accent-green to-primary-light",
  },
];

export default function WhySection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-neutral-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-black mb-8 sm:mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          مش مجرد خدمات ذكاء اصطناعي
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {whyPoints.map((point, index) => (
            <motion.div
              key={index}
              className={`relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${point.gradient}
                         text-white overflow-hidden group cursor-pointer
                         border border-white/20 shadow-lg hover:shadow-2xl
                         transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "url(/images/patterns/pattern-dots.svg)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                  {point.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Hover effect - glowing border */}
              <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
