"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    { title: "Select Document Type", description: "Choose from a wide range of legal document templates" },
    { title: "Answer Questions", description: "Provide necessary information through our conversational UI" },
    { title: "AI-Powered Generation", description: "Our system creates your document using advanced AI" },
    { title: "Review and Edit", description: "Make any final adjustments to your generated document" },
    { title: "Secure Storage", description: "Your document is securely stored with blockchain technology" },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Creating legal documents has never been easier</p>
        </motion.div>
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-600"></div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

