import { motion } from "framer-motion";
import { Button } from "./ui/button";

const PricingCard = ({ title, frequency, originalPrice, earlyBirdPrice, yearlyPrice, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 w-full mx-auto mb-8 last:mb-0 md:mb-0"
  >
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-white text-sm whitespace-nowrap">
      Early Bird Program
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{frequency}</p>
    <div className="mb-6">
      <div className="text-gray-400 line-through mb-1">${originalPrice}/month</div>
      <div className="text-4xl font-bold text-white">${earlyBirdPrice}/month</div>
      <div className="text-primary mt-1">${yearlyPrice} billed yearly</div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-300 flex items-start gap-2">
          <svg
            className="w-5 h-5 text-primary flex-shrink-0 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6"
      onClick={() => window.open('https://hypertype.fillout.com/talktosales?_gl=1*fyovem*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz', '_blank')}
    >
      Get Started
    </Button>
  </motion.div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Bi-Weekly Reports",
      frequency: "Reports every two weeks",
      originalPrice: "800",
      earlyBirdPrice: "300",
      yearlyPrice: "3,600",
      features: [
        "Unlimited tickets during analysis period",
        "Bi-weekly comprehensive reports",
        "Custom support integration",
        "Priority support",
        "Custom features",
      ],
    },
    {
      title: "Weekly Reports",
      frequency: "Reports every week",
      originalPrice: "1,500",
      earlyBirdPrice: "500",
      yearlyPrice: "6,000",
      features: [
        "Unlimited tickets during analysis period",
        "Weekly comprehensive reports",
        "Custom support integration",
        "Priority support",
        "Custom features",
      ],
    },
    {
      title: "Daily Reports",
      frequency: "Reports every day",
      originalPrice: "3,000",
      earlyBirdPrice: "1,000",
      yearlyPrice: "12,000",
      features: [
        "Unlimited tickets during analysis period",
        "Daily comprehensive reports",
        "Custom support integration",
        "Priority support",
        "Custom features",
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Early Bird Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan based on your reporting needs. All plans include unlimited 
            ticket analysis during the reporting period.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;