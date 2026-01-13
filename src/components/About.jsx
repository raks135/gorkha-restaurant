import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChefHat, Wine, Heart, Sparkles } from 'lucide-react'
import './About.css'

const features = [
    {
        icon: ChefHat,
        title: 'Master Chefs',
        description: 'Specialized in traditional Nepali and Indian cuisine.'
    },
    {
        icon: Wine,
        title: 'Full Bar Service',
        description: 'Selection of drinks to complement your spicy meal.'
    },
    {
        icon: Heart,
        title: 'Made with Love',
        description: 'Every dish crafted to offer a warm, genuine dining experience.'
    },
    {
        icon: Sparkles,
        title: 'Fresh Ingredients',
        description: 'Fresh ingredients and aromatic spices for authentic flavor.'
    }
]

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="about" id="about" ref={ref}>
            <div className="about-bg">
                <div className="about-pattern" />
                <div className="about-glow" />
            </div>

            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-image-main">
                            <img
                                src="/images/sea-view.jpg"
                                alt="Atlantic Coast Location"
                            />
                            <div className="about-image-overlay" />
                        </div>

                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Dishes</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Fresh</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">5★</span>
                                <span className="stat-label">Quality</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-experience-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <span className="experience-icon">🌊</span>
                            <div>
                                <span className="experience-title">Himalayan Taste</span>
                                <span className="experience-subtitle">Atlantic Breeze</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="section-badge">
                            <span>About Us</span>
                        </div>

                        <h2 className="section-title">
                            Welcome to Gorkha Restaurant & Bar
                        </h2>

                        <p className="about-description">
                            <strong>Gorkha Restaurant & Bar</strong> brings you the authentic <strong>Taste of the Himalayas on the Atlantic Coast</strong>.
                            Specialized in Nepali and Indian cuisine, we serve traditional dishes prepared with fresh ingredients,
                            aromatic spices, and recipes inspired by the rich culinary heritage of the Himalayas.
                        </p>

                        <p className="about-description">
                            From flavorful momos and comforting curries to freshly baked naan and classic Nepali thali sets,
                            every dish is crafted to offer a warm, genuine dining experience.
                        </p>

                        <p className="about-description highlight">
                            Join us for a journey of taste where Himalayan traditions meet the Atlantic breeze.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="about-feature"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                >
                                    <div className="feature-icon">
                                        <feature.icon size={22} />
                                    </div>
                                    <div>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            className="btn btn-primary"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <span>Visit Us Today</span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
