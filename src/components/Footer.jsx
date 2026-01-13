import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import './Footer.css'

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
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
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        ),
        href: 'https://www.tiktok.com/@gorkha.resturante',
        label: 'TikTok'
    }
]

function Footer() {
    const handleNavClick = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="footer">
            <div className="footer-glow" />

            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img
                            src="/607679353_17844393321647752_8585755371088135418_n.jpg"
                            alt="Gorkha Restaurant"
                            className="footer-logo"
                        />
                        <p>
                            Experience authentic Nepalese and Indian cuisine in the heart of
                            Zambujeira do Mar, Portugal. Every dish tells a story of tradition,
                            passion, and the finest flavors from the Himalayas.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                        <ArrowUpRight size={14} />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-hours">
                        <h4>Opening Hours</h4>
                        <div className="hours-list">
                            <div className="hours-item">
                                <span className="day">Monday - Sunday</span>
                                <span className="time">12:00 PM - 11:00 PM</span>
                            </div>
                        </div>
                        <p className="hours-note">
                            🎉 Open all week for lunch and dinner
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <MapPin size={16} />
                                <span>Praceta Da Boa Vontada 3 3A<br />Zambujeira do Mar, Portugal</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <a href="tel:+351968513653">+351 968 513 653</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:gorkharestaurant2@gmail.com">gorkharestaurant2@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider" />
                    <div className="footer-bottom-content">
                        <p>&copy; {new Date().getFullYear()} Gorkha Restaurant & Bar. All rights reserved.</p>
                        <p className="footer-tagline">Made with ❤️ for authentic Himalayan flavors</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
