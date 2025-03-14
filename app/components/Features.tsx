"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, MessageCircle, Shield, Zap, Users, Clock } from "lucide-react"

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FileText,
      title: "AI-Powered Document Generation",
      description: "Create accurate legal documents in minutes",
    },
    { icon: MessageCircle, title: "Conversational UI", description: "Interact naturally to generate your documents" },
    { icon: Shield, title: "Blockchain Integration", description: "Secure and tamper-proof document storage" },
    { icon: Zap, title: "Predictive Form Filling", description: "Save time with smart, context-aware suggestions" },
    { icon: Users, title: "Legal Professional Tools", description: "Automate routine tasks for increased efficiency" },
    { icon: Clock, title: "24/7 Availability", description: "Access legal assistance anytime, anywhere" },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-xl text-gray-600">Discover how Nyaya-Jyoti is transforming legal documentation</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

