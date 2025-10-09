"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import servicesData from "@/data/services.json";

export default function ServicesGrid() {
  const [expandedBundle, setExpandedBundle] = useState<string | null>(null);

  const toggleBundle = (bundleId: string) => {
    setExpandedBundle(expandedBundle === bundleId ? null : bundleId);
  };

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-black mb-3 sm:mb-4">
            خدماتنا: 71 حل بالذكاء الاصطناعي
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#374151' }}>
            اضغط على أي حزمة لاستكشاف الخدمات المتاحة
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesData.bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Bundle Card */}
              <motion.div
                className={`relative p-5 sm:p-6 lg:p-8 rounded-2xl cursor-pointer
                           border-2 transition-all duration-300
                           ${
                             expandedBundle === bundle.id
                               ? "border-transparent shadow-2xl"
                               : "border-neutral-light hover:border-neutral-medium hover:shadow-lg"
                           }`}
                style={{
                  backgroundColor:
                    expandedBundle === bundle.id
                      ? bundle.color + "20"
                      : "#FFFFFF",
                }}
                onClick={() => toggleBundle(bundle.id)}
                whileHover={{ y: -5 }}
                layout
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: bundle.color + "20" }}
                  >
                    <Image
                      src={bundle.icon}
                      alt={bundle.nameAr}
                      width={48}
                      height={48}
                    />
                  </div>
                </div>

                {/* Bundle Name */}
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-2"
                  style={{ color: bundle.color }}
                >
                  {bundle.nameAr}
                </h3>

                {/* Service Count */}
                <p className="text-sm sm:text-base text-center font-medium" style={{ color: '#374151' }}>
                  {bundle.servicesCount} خدمة
                </p>

                {/* Expand indicator */}
                {!expandedBundle && (
                  <p className="text-center text-sm text-neutral-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    اضغط للعرض
                  </p>
                )}
              </motion.div>

              {/* Expanded Services List */}
              <AnimatePresence>
                {expandedBundle === bundle.id && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setExpandedBundle(null)}
                  >
                    <motion.div
                      className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto"
                      initial={{ scale: 0.9, y: 50 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 50 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-5 sm:mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="p-3 rounded-xl"
                            style={{ backgroundColor: bundle.color + "20" }}
                          >
                            <Image
                              src={bundle.icon}
                              alt={bundle.nameAr}
                              width={40}
                              height={40}
                            />
                          </div>
                          <div>
                            <h3
                              className="text-xl sm:text-2xl lg:text-3xl font-bold"
                              style={{ color: bundle.color }}
                            >
                              {bundle.nameAr}
                            </h3>
                            <p className="text-sm sm:text-base text-neutral-medium">
                              {bundle.servicesCount} خدمة متاحة
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedBundle(null)}
                          className="p-2 rounded-full hover:bg-neutral-lighter transition-colors"
                          aria-label="إغلاق"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      {/* Services List */}
                      <div className="space-y-3">
                        {bundle.services.map((service, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 rounded-xl bg-neutral-lighter hover:bg-neutral-light/30 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <h4 className="font-bold text-neutral-black mb-1">
                                  {service.nameAr}
                                </h4>
                                <p className="text-sm text-neutral-medium">
                                  {service.categoryAr}
                                </p>
                              </div>
                              <div
                                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                style={{ backgroundColor: bundle.color }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
