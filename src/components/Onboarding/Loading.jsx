import { motion } from "framer-motion"
import Loader from "../utils/loader"

const Loading = () => {

    // This screen lasts for only 3 or so seconds

    return (
        <div className="w-screen h-screen bg-loadingPattern bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">

            <div className="">
                <motion.img
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1 }}
                    src="/src/assets/images/ICON 1.png" alt="Flixpal Icon" className="w-30 h-28" />
                <Loader section={1} />
            </div>
        </div>
    )
}

export default Loading
