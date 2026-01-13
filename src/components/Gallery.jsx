import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Instagram, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import './Gallery.css'

const galleryItems = [
    {
        id: 1,
        src: '/images/Chicken-Tikka-Masala-scaled.jpg',
        alt: 'Signature Tikka Masala',
        cat: 'Curry'
    },
    {
        id: 2,
        src: '/images/steam-momo.jpg',
        alt: 'Authentic Momos',
        cat: 'Specialty'
    },
    {
        id: 3,
        src: '/images/sea-view.jpg',
        alt: 'Coastal Location',
        cat: 'Ambiance'
    },
    {
        id: 4,
        src: '/images/thakali set food.jpg',
        alt: 'Thakali Thali Set',
        cat: 'Traditional'
    },
    {
        id: 5,
        src: '/images/pork chowmein.jpg',
        alt: 'Pork Chowmein',
        cat: 'Wok'
    },
    {
        id: 6,
        src: '/images/Murgh-Makhani-Butter-Chicken-4-of-4 (1).jpg',
        alt: 'Butter Chicken',
        cat: 'Popular'
    }
]

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fullscreenImg, setFullscreenImg] = useState(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    }

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    // Keyboard nav
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide()
            if (e.key === 'ArrowLeft') prevSlide()
            if (e.key === 'Escape') setFullscreenImg(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <section className="gallery" id="gallery" ref={ref}>
            <div className="gallery-bg">
                <div className="gallery-glow" />
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">
                        <span>Our Album</span>
                    </div>
                    <h2 className="section-title">Visual Feast</h2>
                    <p className="section-subtitle">
                        A glimpse into our culinary artistry
                    </p>
                </motion.div>

                {/* Modern Flat Slider */}
                <div className="slider-container">
                    <div className="slider-track-wrapper">
                        <motion.div
                            className="slider-track"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {galleryItems.map((item) => (
                                <div key={item.id} className="slider-slide">
                                    <div className="slide-card" onClick={() => setFullscreenImg(item)}>
                                        <div className="slide-img-wrapper">
                                            <img src={item.src} alt={item.alt} />
                                            <div className="slide-overlay">
                                                <Maximize2 className="zoom-icon" size={32} />
                                            </div>
                                        </div>
                                        <div className="slide-info">
                                            <span className="slide-cat">{item.cat}</span>
                                            <h3>{item.alt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <button className="slider-btn prev" onClick={prevSlide}>
                        <ChevronLeft size={24} />
                    </button>
                    <button className="slider-btn next" onClick={nextSlide}>
                        <ChevronRight size={24} />
                    </button>

                    <div className="slider-dots">
                        {galleryItems.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Fullscreen Lightbox */}
                <AnimatePresence>
                    {fullscreenImg && (
                        <motion.div
                            className="lightbox-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setFullscreenImg(null)}
                        >
                            <button className="lightbox-close">
                                <X size={32} />
                            </button>
                            <motion.div
                                className="lightbox-content"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <img src={fullscreenImg.src} alt={fullscreenImg.alt} />
                                <div className="lightbox-caption">
                                    <h3>{fullscreenImg.alt}</h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="gallery-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p>Follow us on Instagram for more</p>
                    <a
                        href="https://www.instagram.com/gorkha.restaurant1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <Instagram size={20} />
                        <span>@gorkha.restaurant1</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Gallery
