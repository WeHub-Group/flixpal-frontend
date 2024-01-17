import BackButton from "../utils/BackButton"
import VerifyIcon from '../../assets/svg/verify.svg';
import CustomButton from "../utils/CustomButton";
import { useNavigate } from "react-router";
import ScrollToLeft from "../animations/ScrollToLeft";

const VerifyEmail = () => {
    const navigate = useNavigate()

    function verifyEmail() {
        navigate('allset')
    }


    return (
        <ScrollToLeft className="w-screen h-screen bg-black flex flex-col justify-center items-center p-5">
            <BackButton />


            <div className="flex flex-col gap-3 w-full justify-center p-5">
                <p className="text-white text-3xl self-center">Verify your Email</p>
                <img src={VerifyIcon} className="w-28 h-28 self-center" />


                {/* TODO: Download Montesserat font also */}
                <p className="text-white text-min text-center">
                    Thank you for registering with flixpal! To ensure the security of your account and provide you with the best possible experience, we need to verify your email address.
                </p>


                <ol className="mt-10 list-disc text-center gap-2 flex flex-col">
                    <li>
                        Open your email client and locate the email from GHD Movies
                    </li>
                    <li>
                        Click on the provided verification link or copy and paste the following URL into your web
                    </li>
                </ol>

                <CustomButton text={'Verify'} onPressed={verifyEmail} />
            </div>

        </ScrollToLeft>
    )
}

export default VerifyEmail
