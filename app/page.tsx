import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  )
}

