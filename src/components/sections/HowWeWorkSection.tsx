"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "نفهم أعمالك",
    description: "جلسة استكشاف مجانية نفهم فيها تحدياتك وأهدافك",
  },
  {
    number: "02",
    title: "نبني الحل",
    description: "نطور أنظمة ذكية مخصصة لاحتياجاتك الفعلية",
  },
  {
    number: "03",
    title: "ندرب فريقك",
    description: "تدريب عملي يضمن استخدام الفريق للأنظمة بفعالية",
  },
  {
    number: "04",
    title: "نتابع النتائج",
    description: "دعم مستمر وتحسينات بناءً على البيانات الفعلية",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-black mb-4">
            ما نكتفي بالكلام
          </h2>
          <p className="text-xl text-neutral-gray-dark max-w-2xl mx-auto">
            نبني، ننفذ، ونتابع. هذي طريقة شغلنا
          </p>
        </motion.div>

        {/* Timeline-style layout */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-6 mb-12 last:mb-0">
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary
                               flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white font-black text-xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-neutral-bg-light to-white rounded-2xl p-6 sm:p-8 border border-neutral-gray-light/50">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-black">
                      {step.title}
                    </h3>
                    <CheckCircle2
                      className="text-accent-green flex-shrink-0"
                      size={28}
                    />
                  </div>
                  <p className="text-lg text-neutral-gray-dark leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary to-secondary opacity-30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
