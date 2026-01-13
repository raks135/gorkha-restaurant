import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import './ThemeToggle.css'

function ThemeToggle({ theme, toggleTheme }) {
    return (
        <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </motion.div>
        </motion.button>
    )
}

export default ThemeToggle
