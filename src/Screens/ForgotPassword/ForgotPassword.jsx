import Navbar from "../../utils/reuseable/Navbar"
import FgPassword from "../../assets/svg/fgpassword.svg";
import { useState } from "react";
import CustomButton from "../../utils/reuseable/CustomButton";
import ScrollToLeft from "../../utils/animations/ScrollToLeft";
import NormalInput from "../../utils/reuseable/NormaInput";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ForgotPassword = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()

    function forgotPassword(e) {
        e.preventDefault();
        navigate('verification/' + email)
    }

    return (
        <ScrollToLeft className="w-screen h-screen bg-black flex justify-center items-center">
            <Navbar title={"Forgot Password"} />

            <div className="w-full flex flex-col gap-5 p-5">
                <motion.img
                    initial={{ scale: 3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    src={FgPassword} className='h-56 w-56 self-center' />

                <p className="text-center">
                    Please Write your email to receive a confirmation code to set a new password.
                </p>

                <form onSubmit={forgotPassword} className='flex flex-col gap-3'>
                    <NormalInput required='true' placeholder={'Email Address'} type={'email'} value={email} onChanged={(e) => { setEmail(e.target.value) }} />
                    <CustomButton text={'Confirm Email'} type='submit' />
                </form>


            </div>

        </ScrollToLeft>
    )
}

export default ForgotPassword
