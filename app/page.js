import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center"
      >
        Build Your Digital Presence with <span className="text-blue-500">Clout</span>
      </motion.h1>
      
      <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl">
        We craft stunning and high-performing websites for businesses, startups, and individuals.
      </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6"
      >
        <Button className="bg-blue-500 px-6 py-3 text-lg font-medium rounded-2xl hover:bg-blue-600">
          Get Started
        </Button>
      </motion.div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl">
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">Custom Websites</h3>
          <p className="mt-2 text-gray-400">Tailored solutions for businesses and individuals.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">SEO Optimization</h3>
          <p className="mt-2 text-gray-400">Boost your rankings and online visibility.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">Fast & Secure</h3>
          <p className="mt-2 text-gray-400">Optimized for performance and security.</p>
        </motion.div>
      </div>
    </div>
  );
}
