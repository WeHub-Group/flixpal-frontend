import Loader from "../../components/utils/Loader";
import groupImage from '../../assets/images/loading2group.png'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../utils/CustomButton";


const Loading2 = () => {
    const navigate = useNavigate()


    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            <img src="/assets/images/loading2group.png" className="h-[50%] w-full" alt="" />

            <div className="h-[55%] w-full flex flex-col justify-evenly gap-2 p-4">
                <Loader section={2} />
                <p className="text-white  text-4xl text-center font-[1100]">
                    Limitless access <br /> to movies, TV <br /> shows, and <br /> beyond.
                </p>
                <p className="text-[#797979]  text-sm text-center">Stream Flixpal from any location. <br />    Cancel anytime.</p>

                <CustomButton text={'Next'} onPressed={() => { navigate('/3') }} />
            </div>
        </div>
    )
}

export default Loading2
