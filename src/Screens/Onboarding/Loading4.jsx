import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Utils
import BackButton from "../../utils/reuseable/BackButton";
import AuthButton from "../../utils/reuseable/AuthButtons";

// Importing images instead
import FacebookIcon from "../../assets/images/facebook.png";
import GoogleIcon from "../../assets/images/google.png";
import AppleIcon from "../../assets/images/apple.png";
import CustomButton from "../../utils/reuseable/CustomButton";
import ScrollToLeft from "../../utils/animations/ScrollToLeft";



const Loading2 = () => {
    const navigate = useNavigate()

    function loginWithFacebook() {
        alert('facebook')
    }

    function loginWithGoogle() {
        alert('google')
    }

    function goToSignInPage() {
        navigate('/login')
    }

    return (
        <ScrollToLeft
            className='w-screen h-screen flex flex-col bg-loading4Pattern bg-center bg-cover bg-no-repeat'>

            <div className="w-full h-full bg-linearGradient">
                <BackButton />

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', duration: 1 }}
                    className="absolute bottom-0 flex flex-col gap-3 w-full p-5">
                    <p className="text-white  text-4xl text-center font-bold">Let&apos;s get you in</p>


                    <div className="flex flex-col gap-4 justify-center">
                        <AuthButton icon={FacebookIcon} name={'Facebook'} onPressed={loginWithFacebook} />
                        <AuthButton icon={GoogleIcon} name={'Google'} onPressed={loginWithGoogle} />
                    </div>


                    <div className="flex flex-row items-center gap-4 text-white w-full">
                        <hr className="w-full" />
                        <p>or</p>
                        <hr className="w-full" />
                    </div>

                    <CustomButton text={'SIGN IN WITH PASSWORD'} onPressed={goToSignInPage} />

                    <p className="text-sm text-white text-center font-extrabold">
                        Don&apos;t have an account? <Link to={"/signup"} className="text-purple">Sign Up</Link></p>
                </motion.div>

            </div>

        </ScrollToLeft>
    )
}
export default Loading2
