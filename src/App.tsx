import './styles/global.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import UseCases from './components/sections/UseCases'
import TechStacks from './components/sections/TechStacks'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import ComingSoon from './components/sections/ComingSoon'
import CTA from './components/sections/CTA'
import Footer from './components/Footer'

function App() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('[data-reveal]'))

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible')
                        observer.unobserve(entry.target)
                    }
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <div className="app">
            <Header />
            <Hero />
            <HowItWorks />
            <Features />
            <UseCases />
            <TechStacks />
            <Pricing />
            <ComingSoon />
            <CTA />
            <Footer />
        </div>
    )
}

export default App
