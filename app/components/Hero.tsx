"use client"
import { motion } from "framer-motion"
import { FileText, Clock, Zap } from "lucide-react"

const Hero = () => {
  return (
    <section className="w-full h-screen py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionizing Legal Documentation in India</h1>
          <p className="text-xl md:text-2xl mb-8">Your 24/7 digital assistant for simplified legal paperwork</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer"
        >
          {[
            {
              icon: FileText,
              title: "Simplified Documentation",
              description: "Create complex legal documents with ease",
            },
            { icon: Clock, title: "24/7 Availability", description: "Access our services anytime, anywhere" },
            {
              icon: Zap,
              title: "AI-Powered",
              description: "Leverage AI for accurate and efficient document generation",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

