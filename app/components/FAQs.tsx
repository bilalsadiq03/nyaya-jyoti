"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does Nyaya-Jyoti ensure the accuracy of legal documents?",
      answer:
        "Nyaya-Jyoti uses advanced AI and machine learning algorithms trained on extensive legal databases to ensure document accuracy. Our system is regularly updated to reflect the latest legal standards and practices in India.",
    },
    {
      question: "Is my data secure with Nyaya-Jyoti?",
      answer:
        "Yes, we take data security very seriously. We use blockchain technology to ensure the integrity and security of your documents. All data is encrypted and stored in compliance with Indian data protection laws.",
    },
    {
      question: "Can Nyaya-Jyoti replace a lawyer?",
      answer:
        "While Nyaya-Jyoti can significantly simplify legal documentation processes, it is not a substitute for professional legal advice. For complex legal matters, we always recommend consulting with a qualified lawyer.",
    },
    {
      question: "How often is Nyaya-Jyoti updated with new legal information?",
      answer:
        "Our team of legal experts and developers work continuously to keep Nyaya-Jyoti updated with the latest legal information and changes in Indian law. The system is typically updated on a weekly basis or immediately when significant legal changes occur.",
    },
    {
      question: "Can I use Nyaya-Jyoti for all types of legal documents?",
      answer:
        "Nyaya-Jyoti covers a wide range of common legal documents such as rental agreements, affidavits, and basic contracts. However, for highly specialized or complex legal documents, it's best to consult with a legal professional.",
    },
  ]

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about Nyaya-Jyoti</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-50 rounded-lg focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white border border-gray-200 rounded-b-lg"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs

