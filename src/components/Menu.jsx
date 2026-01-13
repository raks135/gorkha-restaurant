import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Download, QrCode, X } from 'lucide-react'
import './Menu.css'

const menuCategories = [
    { id: 'all', label: 'All Menu' },
    { id: 'starters', label: 'Starters' },
    { id: 'momo', label: 'Momo' },
    { id: 'curry', label: 'Curry' },
    { id: 'biryani', label: 'Biryani & Naan' },
    { id: 'rice', label: 'Rice & Thali' },
    { id: 'dessert', label: 'Dessert' }
]

const menuItems = [
    // Veg Starters
    { name: 'Chatpate', price: '€3.50', category: 'starters', veg: true },
    { name: 'Pani Puri', price: '€4.00', category: 'starters', veg: true },
    { name: 'Bhatmas Sadeko', price: '€3.00', category: 'starters', veg: true },
    { name: 'Chow-Chow Sadeko', price: '€3.50', category: 'starters', veg: true },
    { name: 'Samosa (2 pcs)', price: '€4.00', category: 'starters', veg: true },
    { name: 'Pakoda', price: '€4.00', category: 'starters', veg: true },
    { name: 'French Fries', price: '€3.50', category: 'starters', veg: true },

    // Non-Veg Starters
    { name: 'Buff Sukuti', price: '€10.00', category: 'starters', popular: true },
    { name: 'Chicken Lollipop', price: '€6.50', category: 'starters', popular: true },
    { name: 'Chicken Chilli', price: '€7.00', category: 'starters' },
    { name: 'Chicken Sausage (2 pcs)', price: '€5.00', category: 'starters' },
    { name: 'Chicken Tandoori', price: '€9.00', category: 'starters', popular: true },
    { name: 'Chicken Tikka', price: '€9.00', category: 'starters' },

    // Chowmein
    { name: 'Veg Chowmein', price: '€4.50', category: 'starters', veg: true },
    { name: 'Chicken Chowmein', price: '€5.00', category: 'starters' },
    { name: 'Pork Chowmein', price: '€5.50', category: 'starters' },
    { name: 'Mix Chowmein', price: '€7.50', category: 'starters' },

    // Momo
    { name: 'Veg Momos', price: '€5.00', category: 'momo', veg: true },
    { name: 'Steam Momo', price: '€4.50', category: 'momo' },
    { name: 'Jhol Momo', price: '€5.50', category: 'momo', popular: true },
    { name: 'Fry Momo', price: '€5.00', category: 'momo' },
    { name: 'C Momo', price: '€5.00', category: 'momo' },
    { name: 'Kothey Momo', price: '€5.00', category: 'momo' },
    { name: 'Chicken Steam Momo', price: '€5.00', category: 'momo' },
    { name: 'Chicken Jhol Momo', price: '€6.50', category: 'momo', popular: true },
    { name: 'Chicken Fry Momo', price: '€6.00', category: 'momo' },
    { name: 'Chicken C Momo', price: '€7.00', category: 'momo' },
    { name: 'Chicken Kothey', price: '€6.00', category: 'momo' },

    // Biryani & Naan
    { name: 'Veg Biryani', price: '€8.50', category: 'biryani', veg: true },
    { name: 'Chicken Biryani', price: '€9.00', category: 'biryani', popular: true },
    { name: 'Mutton Biryani', price: '€10.50', category: 'biryani', popular: true },
    { name: 'Plain Naan', price: '€2.00', category: 'biryani', veg: true },
    { name: 'Butter Naan', price: '€2.50', category: 'biryani', veg: true },
    { name: 'Garlic Naan', price: '€3.00', category: 'biryani', veg: true, popular: true },
    { name: 'Cheese Naan', price: '€3.00', category: 'biryani', veg: true },

    // Curry
    { name: 'Mix Veg Curry', price: '€8.00', category: 'curry', veg: true },
    { name: 'Dal Fry', price: '€7.50', category: 'curry', veg: true },
    { name: 'Palak Paneer', price: '€8.50', category: 'curry', veg: true, popular: true },
    { name: 'Butter Chicken', price: '€10.00', category: 'curry', popular: true },
    { name: 'Chicken Curry', price: '€9.50', category: 'curry' },
    { name: 'Mutton Curry', price: '€11.90', category: 'curry', popular: true },

    // Rice & Thali
    { name: 'Plain Rice', price: '€2.50', category: 'rice', veg: true },
    { name: 'Jeera Rice', price: '€3.00', category: 'rice', veg: true },
    { name: 'Veg Fried Rice', price: '€5.00', category: 'rice', veg: true },
    { name: 'Chicken Fried Rice', price: '€6.00', category: 'rice' },
    { name: 'Mix Fried Rice', price: '€7.00', category: 'rice' },
    { name: 'Veg Thali Set', price: '€8.00', category: 'rice', veg: true },
    { name: 'Chicken Thali Set', price: '€10.00', category: 'rice', popular: true },
    { name: 'Mutton Thali Set', price: '€11.00', category: 'rice', popular: true },

    // Dessert
    { name: 'Gulab Jamun (2 pcs)', price: '€3.00', category: 'dessert', veg: true, popular: true },
    { name: 'Vanilla Ice Cream', price: '€2.90', category: 'dessert', veg: true },
    { name: 'Chocolate Ice Cream', price: '€2.90', category: 'dessert', veg: true },
    { name: 'Mango Kulfi', price: '€2.95', category: 'dessert', veg: true }
]

function Menu() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [showQR, setShowQR] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory)

    return (
        <section className="menu" id="menu" ref={ref}>
            <div className="menu-bg">
                <div className="menu-glow-1" />
                <div className="menu-glow-2" />
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">
                        <span>Our Menu</span>
                    </div>
                    <h2 className="section-title">Taste the Himalayan Excellence</h2>
                    <p className="section-subtitle">
                        Discover our carefully crafted dishes, from traditional momos to aromatic curries
                    </p>
                </motion.div>

                <motion.div
                    className="menu-tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {menuCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    className="menu-grid"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={`${item.name}-${index}`}
                            className="menu-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.03 }}
                            layout
                        >
                            <div className="menu-item-content">
                                <div className="menu-item-header">
                                    <h3 className="menu-item-name">{item.name}</h3>
                                    <div className="menu-item-tags">
                                        {item.veg && <span className="tag tag-veg">Veg</span>}
                                        {item.popular && <span className="tag tag-popular">Popular</span>}
                                    </div>
                                </div>
                                <div className="menu-item-line" />
                                <span className="menu-item-price">{item.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="menu-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a
                        href="/612740284_17845359798647752_2607735534792320620_n.jpg"
                        target="_blank"
                        className="btn btn-secondary"
                    >
                        <Download size={18} />
                        <span>View Full Menu</span>
                    </a>

                    <button
                        className="btn btn-primary"
                        onClick={() => setShowQR(true)}
                    >
                        <QrCode size={18} />
                        <span>QR Menu</span>
                    </button>
                </motion.div>
            </div>

            <AnimatePresence>
                {showQR && (
                    <motion.div
                        className="qr-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowQR(false)}
                    >
                        <motion.div
                            className="qr-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="qr-close" onClick={() => setShowQR(false)}>
                                <X size={24} />
                            </button>

                            <div className="qr-content">
                                <h3>Digital Menu</h3>
                                <p>Scan to view full menu on mobile</p>

                                <div className="qr-code-wrapper">
                                    <img
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://gorkharestaurant.pt/menu')}&color=d4a518&bgcolor=1a1a22`}
                                        alt="Menu QR Code"
                                    />
                                    <div className="qr-corner tl"></div>
                                    <div className="qr-corner tr"></div>
                                    <div className="qr-corner bl"></div>
                                    <div className="qr-corner br"></div>
                                </div>

                                <span className="qr-footer">Gorkha Restaurant & Bar</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Menu
