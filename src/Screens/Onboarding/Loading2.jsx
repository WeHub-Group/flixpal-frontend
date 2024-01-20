import Loader from "../../utils/reuseable/Loader";
import groupImage from '../../assets/images/loading2group.png'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../utils/reuseable/CustomButton";
import ScrollToLeft from "../../utils/animations/ScrollToLeft";



const Loading2 = () => {
    const navigate = useNavigate()


    return (
        <ScrollToLeft
            className='w-screen h-full bg-black flex flex-col'>


            <motion.img
                initial={{ scale: 3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
                src={groupImage} className="h-[45%] blur-0 w-full" alt="" />

            <div className="h-[55%] w-full flex flex-col justify-evenly gap-2 p-4">
                <Loader section={2} />
                <p className="text-white font-kanit text-4xl text-center font-bold">
                    Limitless access <br /> to movies, TV <br /> shows, and <br /> beyond.
                </p>
                <p className="text-[#797979] font-kanit text-sm text-center">Stream Flixpal from any location. <br />    Cancel anytime.</p>

                <CustomButton text={'Next'} onPressed={() => { navigate('/3') }} />
            </div>


        </ScrollToLeft>
    )
}

export default Loading2
