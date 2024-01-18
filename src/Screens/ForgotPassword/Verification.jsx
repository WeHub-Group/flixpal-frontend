import ScrollToLeft from '../../utils/animations/ScrollToLeft'
import Navbar from '../../utils/reuseable/Navbar'
import VerifyImg from '../../assets/svg/verification_code.svg'
import CustomButton from '../../utils/reuseable/CustomButton'
import { useNavigate } from 'react-router-dom'

const Verification = () => {
    const navigate = useNavigate()

    return (
        <ScrollToLeft className='w-screen h-screen bg-black flex justify-center items-center'>
            <Navbar title={'Verification Code'} />

            <div className="w-full flex flex-col gap-5 p-5">
                <img src={VerifyImg} className='h-56 w-56 self-center' />

                <p className="text-center">
                    Please Write your email to receive a confirmation code to set a new password.
                </p>


                <CustomButton text={'Confirm Email'} onPressed={() => { navigate('verification') }} />
            </div>

        </ScrollToLeft>
    )
}

export default Verification
