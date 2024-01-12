import Loader from "../../components/utils/Loader";
import groupImage from '../../assets/images/loading3.png'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Loading3 = () => {
    return (
        <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className='w-screen h-screen bg-black flex flex-col'>

            {/* This div was put to darken the background because the image was hard to blend with the black */}
            <div className="bg-[rgba(0,0,0,0.9)] w-full h-full">
                <motion.img
                    initial={{ scale: 3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'tween', duration: 1 }}
                    src={groupImage} className="h-[45%] blur-1 w-full" alt="" />

                <div className="h-[55%] w-full flex justify-evenly flex-col gap-2 p-4">
                    <Loader section={3} />
                    <p className="text-white font-kanit text-4xl text-center font-bold">
                        Experience movies and TV in Virtual Reality.
                    </p>
                    <p className="text-[#797979] font-kanit text-sm text-center">Stream Flixpal from any location. <br />    Cancel anytime.</p>

                    <Link className="bg-purple p-3 font-kanit text-white uppercase font-semibold rounded-lg text-center">Next</Link>
                </div>
            </div>

        </motion.div>
    )
}

export default Loading3
