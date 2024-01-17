// eslint-disable-next-line react/prop-types
import { motion } from 'framer-motion'

const ScrollToLeft = ({ children, ...props }) => {

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }} {...props}>
            {children}
        </motion.div>
    )
}

export default ScrollToLeft
