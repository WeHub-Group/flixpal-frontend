import BackButton from "../utils/BackButton"
import VerifyIcon from '../../assets/svg/verify.svg';

const VerifyEmail = () => {
    return (
        <div className="w-screen h-screen bg-purple">
            <BackButton />

            <div className="flex flex-col gap-3 w-full justify-center">
                <p className="text-white text-xl">Verify your Email</p>
                <img src={VerifyIcon} className="w-10 h-10" />
            </div>

        </div>
    )
}

export default VerifyEmail
