/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { motion } from 'framer-motion'

const ScrollToTop = ({ children, ...props }) => {

    return (
        <motion.div
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.7, type: 'tween' }} {...props}>
            {children}
        </motion.div>
    )
}

export default ScrollToTop
