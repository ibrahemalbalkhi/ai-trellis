"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Zap } from "lucide-react";

const valuePoints = [
  {
    icon: Brain,
    title: "معالجة اللغة الطبيعية",
    description:
      "فهم العربية والإنجليزية. تحليل المشاعر. استخراج الرؤى من النصوص",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: TrendingUp,
    title: "التعلم الآلي والتنبؤ",
    description: "تحليل البيانات. توقع السلوك. تحسين القرارات",
    gradient: "from-secondary-dark to-secondary",
  },
  {
    icon: Zap,
    title: "الأتمتة الذكية",
    description:
      "من الرد على العملاء للتسويق. كل شي يشتغل تلقائياً بذكاء",
    gradient: "from-accent-green to-primary",
  },
];

export default function ValueSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-black mb-8 sm:mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          الذكاء الاصطناعي اللي نستخدمه
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {valuePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${point.gradient}
                             text-white overflow-hidden h-full
                             transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2`}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "url(/images/patterns/pattern-dots.svg)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-white sm:w-8 sm:h-8" />
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      {point.title}
                    </h3>

                    <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
