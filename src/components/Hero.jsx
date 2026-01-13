import { motion } from 'framer-motion'
import { ChevronDown, Utensils, Leaf, Award, Star } from 'lucide-react'
import './Hero.css'

function Hero() {
    const scrollToMenu = () => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            {/* Video Background */}
            <div className="hero-bg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                    poster="/images/sea-view.jpg"
                >
                    <source src="/video/1767640833108279.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay" />

                {/* Particles for extra effect */}
                <div className="hero-particles">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{
                                opacity: [0, 1, 0],
                                y: [-100, -500],
                                x: Math.random() * 100 - 50
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: 'linear'
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                width: `${2 + Math.random() * 3}px`,
                                height: `${2 + Math.random() * 3}px`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Star size={14} fill="currentColor" />
                        <span>Authentic Nepalese & Indian Cuisine</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="hero-title-small">Welcome to</span>
                        <span className="hero-title-main">
                            Gorkha
                            <br />
                            <span className="hero-title-accent">Restaurant & Bar</span>
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Experience the rich flavors of the Himalayas in the heart of Portugal.
                        Every dish crafted with tradition, passion, and the finest ingredients.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="btn btn-primary" onClick={scrollToMenu}>
                            <span>Explore Menu</span>
                            <Utensils size={18} />
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            <span>Book a Table</span>
                        </button>
                    </motion.div>

                    <motion.div
                        className="hero-features"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="hero-feature">
                            <div className="hero-feature-icon">
                                <Utensils size={20} />
                            </div>
                            <div>
                                <h4>Traditional Recipes</h4>
                                <p>Passed down generations</p>
                            </div>
                        </div>
                        <div className="hero-feature">
                            <div className="hero-feature-icon">
                                <Leaf size={20} />
                            </div>
                            <div>
                                <h4>Fresh Ingredients</h4>
                                <p>Locally sourced daily</p>
                            </div>
                        </div>
                        <div className="hero-feature">
                            <div className="hero-feature-icon">
                                <Award size={20} />
                            </div>
                            <div>
                                <h4>Premium Quality</h4>
                                <p>Excellence in every bite</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="hero-image-wrapper">
                        <img
                            src="/curry.png"
                            alt="Signature Curry"
                        />
                        <div className="hero-image-glow" />
                    </div>
                    <div className="hero-floating-card">
                        <div className="floating-card-icon">🍛</div>
                        <div>
                            <h4>Signature Dishes</h4>
                            <p>Discover our specialties</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <ChevronDown size={20} className="scroll-arrow" />
            </motion.div>
        </section>
    )
}

export default Hero
