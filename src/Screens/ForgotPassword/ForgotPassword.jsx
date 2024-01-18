import Navbar from "../../utils/reuseable/Navbar"
import FgPassword from "../../assets/svg/fgpassword.svg";
import { useState } from "react";
import CustomButton from "../../utils/reuseable/CustomButton";
import ScrollToLeft from "../../utils/animations/ScrollToLeft";
import NormalInput from "../../utils/reuseable/NormaInput";

const ForgotPassword = () => {
    const [email, setEmail] = useState()


    return (
        <ScrollToLeft className="w-screen h-screen bg-black flex justify-center items-center">
            <Navbar title={"Forgot Password"} />

            <div className="w-full flex flex-col gap-5 p-5">
                <img src={FgPassword} className='h-56 w-56 self-center' />

                <p className="text-center">
                    Please Write your email to receive a confirmation code to set a new password.
                </p>

                <NormalInput type={'email'} value={email} onChanged={(e) => { setEmail(e.target.value) }} />
                <CustomButton text={'Confirm Email'} />
            </div>

        </ScrollToLeft>
    )
}

export default ForgotPassword
