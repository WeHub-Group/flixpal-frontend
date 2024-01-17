import BackButton from "../utils/BackButton"
import AllSetIcon from '../../assets/svg/all set.svg';
import CustomButton from "../utils/CustomButton";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import ScrollToLeft from "../animations/ScrollToLeft";


const AllSet = () => {
    const navigate = useNavigate()

    return (
        <ScrollToLeft
            className="w-screen h-screen bg-black flex flex-col justify-center items-center p-5">
            <BackButton />


            <div className="flex flex-col gap-10 w-full justify-center p-5">
                <p className="text-white text-3xl text-uppercase text-center">Your all set!</p>

                <motion.img
                    initial={{ scale: 3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    src={AllSetIcon} className="w-64 h-64 self-center" />



                <CustomButton className={'uppercase text-3xl'} text={'Go!'} onPressed={() => { alert("That's all for now") }} />
            </div>

        </ScrollToLeft>
    )
}

export default AllSet
