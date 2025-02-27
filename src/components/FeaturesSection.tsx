import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BarChart3, Layers, TrendingUp } from "lucide-react";
import FeatureCard from "./features/FeatureCard";
import ImageShowcase from "./features/ImageShowcase";

const FeaturesSection = () => {
  const [frontImage, setFrontImage] = useState<'reports' | 'dashboard'>('reports');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontImage(prev => prev === 'reports' ? 'dashboard' : 'reports');
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      title: "Data-Driven Insights",
      description:
        "Transform your support tickets into actionable insights with our advanced analytics engine. Understand user pain points and prioritize improvements effectively.",
      icon: BarChart3
    },
    {
      title: "Smart Categorization",
      description:
        "Automatically categorize and prioritize support tickets using AI-powered analysis. Save time and ensure consistent ticket handling across your team.",
      icon: Layers
    },
    {
      title: "Trend Analysis",
      description:
        "Identify patterns and trends in your support data to proactively address customer needs. Stay ahead of issues before they become widespread problems.",
      icon: TrendingUp
    },
  ];

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24 lg:mb-40"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
            Your Support Data is Your Goldmine
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hypersight synthesizes your ticket data into actionable insights,
            helping you make informed business decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 mb-48 lg:mb-0"> {/* Increased bottom margin to mb-48 */}
            <ImageShowcase frontImage={frontImage} setFrontImage={setFrontImage} />
          </div>

          <div className="lg:col-span-5 space-y-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;