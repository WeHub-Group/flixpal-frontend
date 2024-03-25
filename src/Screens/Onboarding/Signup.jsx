import { useState } from "react";
import BackButton from "../../utils/reuseable/BackButton";
import CustomButton from "../../utils/reuseable/CustomButton";
import NormalInput from "../../utils/reuseable/NormaInput";
import { FaMailBulk, FaMailchimp, FaTelegramPlane } from "react-icons/fa";
import PasswordInput from "../../utils/reuseable/PasswordInput";
import { motion } from "framer-motion";
import AuthTags from "../../utils/reuseable/AuthTags";

import FacebookIcon from "../../assets/images/facebook.png";
import GoogleIcon from "../../assets/images/google.png";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../../utils/reuseable/ProgressBar";
import UsernameIcon from '../../utils/reuseable/UsernameIcon'



const SignUp = () => {
    const navigate = useNavigate()

    // I do not know how to use react-forms sorry
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    function loginWithFacebook() {
        alert('facebook')
    }

    function loginWithGoogle() {
        alert('google')
    }

    function signupUser(e) {
        e.preventDefault();

        // collect user details
        setIsLoading(true)
        setTimeout(() => {
            navigate('verifyemail/' + email)
        }, 1000);

    }


    return (
        <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="w-screen h-screen bg-signupPattern bg-center bg-no-repeat bg-cover flex justify-content items-center">
            <BackButton />

            <div className="w-full h-full flex flex-col justify-center p-5 gap-4 bg-linearGradient">
                <p className="text-white text-4xl text-center">Create your <br /> Account</p>

                <motion.form
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', duration: 1 }}
                    className="flex flex-col w-full gap-3"
                    onSubmit={signupUser}>

                    {/* Email */}
                    <NormalInput
                        icon={<UsernameIcon />}
                        type={'email'}
                        placeholder={'Enter your Email'}
                        value={email}
                        required={true}
                        onChanged={(e) => { setEmail(e.target.value) }}
                    />


                    {/* Password */}
                    <PasswordInput
                        placeholder={'Password'}
                        value={password}
                        required={true}
                        onChanged={(e) => { setPassword(e.target.value) }}
                    />

                    {/* Confirm Password */}
                    <PasswordInput
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        required={true}
                        onChanged={(e) => { setConfirmPassword(e.target.value) }}
                    />

                    <div className="flex flex-row gap-3 items-center">
                        <input type="checkbox" className="accent-purple h-4 w-4" />
                        <p className="text-sm text-white">Remember me</p>
                    </div>

                    <CustomButton type='submit' text={'Create Account'} />

                    <ProgressBar isLoading={isLoading} />


                    <div className="flex flex-row items-center self-stretch justify-evenly gap-4 text-white w-full">
                        <hr className="w-full" />
                        <p className="uppercase text-min w-[130%] text-center">or continue with</p>
                        <hr className="w-full" />
                    </div>

                    <div className="flex flex-row gap-2 justify-center items-center">
                        <AuthTags icon={FacebookIcon} onPressed={loginWithFacebook} />
                        <AuthTags icon={GoogleIcon} onPressed={loginWithGoogle} />
                    </div>

                    <p className="text-sm text-white text-center font-extrabold">
                        Have an account? <Link to={"/login"} className="text-purple">Sign In</Link></p>
                </motion.form>



            </div>



        </motion.div >
    )
}

export default SignUp
