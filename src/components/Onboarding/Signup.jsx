import { useState } from "react";
import BackButton from "../../components/utils/BackButton";
import NormalInput from "../utils/NormaInput";
import { FaTelegramPlane } from "react-icons/fa";
import PasswordInput from "../utils/PasswordInput";



const SignUp = () => {

    // I do not know how to use react-forms sorry
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    return (
        <div className="w-screen h-screen bg-black flex justify-content items-center p-5">
            <BackButton />

            <div className="w-full flex flex-col gap-4">
                <p className="text-white text-4xl text-center">Create your <br /> Account</p>

                <div className="flex flex-col w-full gap-3">
                    <NormalInput
                        type={'email'}
                        O placeholder={'Enter your Email'}
                        icon={<FaTelegramPlane />}
                        value={email}
                        onChanged={(e) => { setEmail(e.target.value) }}
                    />

                    <PasswordInput
                        placeholder={'Password'}
                        value={password}
                        onChanged={(e) => { setPassword(e.target.value), console.log(password); }}
                    />
                    <PasswordInput
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        onChanged={(e) => { setConfirmPassword(e.target.value), console.log(password); }}
                    />
                </div>


                <div className="flex flex-row gap-3 items-center">
                    <input type="checkbox" className="accent-purple" />
                    <p className="text-sm text-white">Remember me</p>
                </div>
            </div>



        </div>
    )
}

export default SignUp
