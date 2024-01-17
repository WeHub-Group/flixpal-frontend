import ScrollToLeft from '../../utils/animations/ScrollToLeft'
import BackButton from '../../utils/reuseable/BackButton'

import CustomButton from "../../utils/reuseable/CustomButton";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import NormalInput from '../../utils/reuseable/NormaInput';
import PasswordInput from '../../utils/reuseable/PasswordInput';
import { useState } from 'react';
import AuthTags from '../../utils/reuseable/AuthTags';
import FacebookIcon from "../../assets/images/facebook.png";
import GoogleIcon from "../../assets/images/google.png";
import AppleIcon from "../../assets/images/apple.png";

const Login1 = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function loginWithFacebook() {
        alert('facebook')
    }

    function loginWithGoogle() {
        alert('google')
    }
    function loginWithAppleId() {
        alert('apple')
    }

    function goToSignInPage() {
        navigate('/login')
    }
    return (
        <ScrollToLeft className='w-screen h-screen flex flex-col bg-loginPattern bg-center bg-cover bg-no-repeat'>
            <BackButton />



            <div className="w-full h-full bg-linearGradient">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', duration: 1 }}
                    className="absolute bottom-0 flex flex-col gap-3 w-full p-5">
                    <p className="text-white text-4xl text-center font-extrabold">Login to your account</p>

                    <NormalInput
                        type={'email'}
                        placeholder={'Enter your Email'}
                        value={email}
                        required={true}
                        onError={() => { alert('error') }}
                        onChanged={(e) => { setEmail(e.target.value) }}
                    />

                    <PasswordInput
                        placeholder={'Password'}
                        value={password}
                        required={true}
                        onChanged={(e) => { setPassword(e.target.value) }}
                    />

                    <div className="flex flex-row gap-3 items-center">
                        <input type="checkbox" className="accent-purple h-4 w-4" />
                        <p className="text-sm text-white">Remember me</p>
                    </div>

                    <CustomButton text={'Login'} onPressed={goToSignInPage} />

                    <p className="text-purple text-lg text-center">Forgot Password?</p>

                    <div className="flex flex-row items-center self-stretch justify-evenly gap-4 text-white w-full">
                        <hr className="w-full" />
                        <p className="uppercase text-min w-[130%] text-center">or continue with</p>
                        <hr className="w-full" />
                    </div>

                    <div className="flex flex-row gap-2 justify-center items-center">
                        <AuthTags icon={FacebookIcon} onPressed={loginWithFacebook} />
                        <AuthTags icon={GoogleIcon} onPressed={loginWithGoogle} />
                        <AuthTags icon={AppleIcon} onPressed={loginWithAppleId} />
                    </div>

                    <p className="text-sm text-white text-center font-extrabold">
                        Don&apos;t have an account? <Link to={"/signup"} className="text-purple">Sign Up</Link></p>
                </motion.div>

            </div>

        </ScrollToLeft>
    )
}

export default Login1
