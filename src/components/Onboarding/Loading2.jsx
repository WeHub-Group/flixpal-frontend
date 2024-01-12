import Loader from "../../components/utils/Loader";
import groupImage from '../../assets/images/loading2group.png'
import { motion } from "framer-motion";




const Loading2 = () => {

    return (
        <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 1 }}
            className='w-screen h-screen bg-black flex flex-col'>
            <img src={groupImage} className="h-[45%] blur-0 w-full" alt="" />

            <div className="h-[55%] w-full flex flex-col gap-2 p-3">
                <Loader section={2} />
                <p className="text-white font-kanit text-4xl text-center font-bold">Limitless access <br /> to movies, TV <br /> shows, and <br /> beyond.</p>
                <p className="text-[#797979] font-kanit text-sm text-center">Stream Flixpal from any location. <br />    Cancel anytime.</p>

                <button className="bg-purple p-3 font-kanit text-white uppercase font-semibold rounded-lg">Next</button>
            </div>
        </motion.div>
    )
}

export default Loading2
