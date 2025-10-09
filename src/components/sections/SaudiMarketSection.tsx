"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Sparkles } from "lucide-react";

const marketInsights = [
  {
    icon: TrendingUp,
    stat: "رؤية 2030",
    description: "نساهم في تحقيق أهداف التحول الرقمي",
    color: "from-primary to-primary-light",
  },
  {
    icon: Building2,
    stat: "السوق السعودي",
    description: "فهم عميق للتحديات والفرص المحلية",
    color: "from-secondary-dark to-secondary",
  },
  {
    icon: Users,
    stat: "باللغة العربية",
    description: "أنظمة تفهم العربية بشكل طبيعي",
    color: "from-accent-green to-primary",
  },
  {
    icon: Sparkles,
    stat: "تقنيات محلية",
    description: "حلول متوافقة مع الأنظمة السعودية",
    color: "from-secondary to-accent-orange",
  },
];

export default function SaudiMarketSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-secondary-dark text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/patterns/pattern-grid.svg)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            مصممين للسوق السعودي
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            نفهم التحديات المحلية ونبني حلول تناسب السوق
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {marketInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8
                             border border-white/20 hover:bg-white/15 transition-all duration-300
                             hover:scale-105 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${insight.color}
                               flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{insight.stat}</h3>
                  <p className="text-white/80 leading-relaxed">
                    {insight.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional highlights */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <p className="text-lg sm:text-xl font-medium">
              <span className="font-bold text-accent-green">100%</span> من
              حلولنا متوافقة مع الأنظمة واللوائح السعودية
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
