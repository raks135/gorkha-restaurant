import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react'
import './Contact.css'

const contactInfo = [
    {
        icon: MapPin,
        title: 'Location',
        lines: ['Praceta Da Boa Vontada 3 3A', 'Zambujeira do Mar', 'Portugal 7630-765'],
        link: 'https://maps.google.com/?q=Praceta+Da+Boa+Vontada+3+3A+Zambujeira+do+Mar+Portugal',
        linkText: 'Get Directions'
    },
    {
        icon: Phone,
        title: 'Phone',
        lines: ['+351 968 513 653'],
        link: 'tel:+351968513653',
        linkText: 'Call Now'
    },
    {
        icon: Mail,
        title: 'Email',
        lines: ['gorkharestaurant2@gmail.com'],
        link: 'mailto:gorkharestaurant2@gmail.com',
        linkText: 'Send Email'
    },
    {
        icon: Clock,
        title: 'Opening Hours',
        lines: ['Monday - Sunday', '12:00 PM - 11:00 PM'],
        link: null
    }
]

const socialLinks = [
    {
        icon: Facebook,
        href: 'https://www.facebook.com/profile.php?id=61585680397245',
        label: 'Facebook'
    },
    {
        icon: Instagram,
        href: 'https://www.instagram.com/gorkha.restaurant1',
        label: 'Instagram'
    },
    {
        icon: () => (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        ),
        href: 'https://www.tiktok.com/@gorkha.resturante',
        label: 'TikTok'
    }
]

function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.')
            setFormData({ name: '', email: '', phone: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }

    return (
        <section className="contact" id="contact" ref={ref}>
            <div className="contact-bg">
                <div className="contact-glow-1" />
                <div className="contact-glow-2" />
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">
                        <span>Contact Us</span>
                    </div>
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">
                        We'd love to hear from you. Book a table or send us a message.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-cards">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    className="info-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="info-icon">
                                        <info.icon size={22} />
                                    </div>
                                    <div className="info-content">
                                        <h4>{info.title}</h4>
                                        {info.lines.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                        {info.link && (
                                            <a href={info.link} target="_blank" rel="noopener noreferrer" className="info-link">
                                                {info.linkText}
                                                <span>→</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="social-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send Us a Message</h3>

                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder=" "
                                />
                                <label htmlFor="name">Your Name</label>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder=" "
                                    />
                                    <label htmlFor="phone">Phone</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    placeholder=" "
                                />
                                <label htmlFor="message">Your Message</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
