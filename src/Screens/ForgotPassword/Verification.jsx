import ScrollToLeft from '../../utils/animations/ScrollToLeft'
import Navbar from '../../utils/reuseable/Navbar'
import VerifyImg from '../../assets/svg/verification_code.svg'
import CustomButton from '../../utils/reuseable/CustomButton'
import { useNavigate, useParams } from 'react-router-dom'
import PinInput from 'react-pin-input'
import { useRef, useState } from 'react'
import { WiRefresh } from "react-icons/wi";


const Verification = () => {
    const { email } = useParams()
    const pinRef = useRef()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [verificationCode, setVerificationCode] = useState()

    function VerifyEmail() {

        if (verificationCode == null) {
            alert('Verification Code is required')
            return false
        }
        else {
            setIsLoading(!isLoading)
            navigate('/forgotpassword/change/' + email)
        }
    }

    return (
        <ScrollToLeft className='w-screen h-screen bg-black flex justify-center items-center'>
            <Navbar title={'Verification Code'} />

            <div className="w-full flex flex-col gap-5 p-5">
                <img src={VerifyImg} className='h-56 w-56 self-center' />

                <p className="text-2xl text-center font-extrabold">Verify Email Address</p>
                <p className="text-sm w-full text-center">Confirm the code sent to {email}</p>

                <div className="flex justify-center items-center ">
                    <PinInput
                        ref={pinRef}
                        length={4}
                        initialValue={verificationCode}
                        onChange={(value) => { setVerificationCode(value) }}
                    />
                </div>


                <CustomButton
                    text={isLoading ?
                        <WiRefresh className='animate-spin text-3xl' /> : 'Confirm Email'
                    }
                    onPressed={VerifyEmail} />
            </div>

        </ScrollToLeft>
    )
}

export default Verification
