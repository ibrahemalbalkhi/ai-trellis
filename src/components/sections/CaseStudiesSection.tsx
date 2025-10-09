"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    industry: "التجارة الإلكترونية",
    challenge: "معدل تحويل منخفض",
    solution: "نظام توصيات ذكي + chatbot بالعربي",
    results: [
      { metric: "زيادة 156%", label: "في معدل التحويل" },
      { metric: "تقليل 40%", label: "في تكلفة دعم العملاء" },
    ],
    gradient: "from-primary to-primary-light",
  },
  {
    industry: "الخدمات المالية",
    challenge: "عملية تأهيل العملاء بطيئة",
    solution: "أتمتة كاملة + تحليل وثائق بالذكاء الاصطناعي",
    results: [
      { metric: "تقليل 80%", label: "في وقت التأهيل" },
      { metric: "دقة 99%", label: "في التحقق من الوثائق" },
    ],
    gradient: "from-secondary-dark to-secondary",
  },
  {
    industry: "التعليم",
    challenge: "صعوبة متابعة أداء الطلاب",
    solution: "لوحة معلومات ذكية + تنبيهات تلقائية",
    results: [
      { metric: "تحسين 45%", label: "في معدل النجاح" },
      { metric: "توفير 30 ساعة", label: "شهرياً للمعلمين" },
    ],
    gradient: "from-accent-green to-primary",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-neutral-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-black mb-3 sm:mb-4">
            نتائج حقيقية، مش وعود
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-gray-dark max-w-2xl mx-auto">
            شركات سعودية حققت نتائج ملموسة معنا
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Industry tag */}
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-br ${study.gradient} text-white text-sm font-bold mb-6`}
                >
                  {study.industry}
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-neutral-gray-medium uppercase tracking-wide mb-2">
                    التحدي
                  </h3>
                  <p className="text-lg font-semibold text-neutral-black">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-neutral-gray-medium uppercase tracking-wide mb-2">
                    الحل
                  </h3>
                  <p className="text-base text-neutral-gray-dark leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-gray-light my-6" />

                {/* Results */}
                <div>
                  <h3 className="text-sm font-bold text-neutral-gray-medium uppercase tracking-wide mb-4">
                    النتائج
                  </h3>
                  <div className="space-y-3">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-neutral-gray-dark">
                          {result.label}
                        </span>
                        <span
                          className={`text-xl font-black bg-gradient-to-br ${study.gradient} bg-clip-text text-transparent`}
                        >
                          {result.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight
                    size={24}
                    className="text-neutral-gray-light"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-base sm:text-lg text-neutral-gray-dark">
            هل تريد نتائج مثل هذه لشركتك؟
          </p>
        </motion.div>
      </div>
    </section>
  );
}
