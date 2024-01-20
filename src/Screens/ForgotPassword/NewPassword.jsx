import { useState } from "react"
import Navbar from "../../utils/reuseable/Navbar"
import CustomButton from "../../utils/reuseable/CustomButton"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import { WiRefresh } from "react-icons/wi"
import ProgressBar from "../../utils/reuseable/ProgressBar"


const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [match, setMatch] = useState(true)

    const inputItem = 'h-14 bg-transparent p-2 outline-none border-white border-2 roun'

    function updateNewPassword(e) {
        e.preventDefault();

        if (password == confirmPassword) {
            console.log('Updating');
            setIsLoading(true)
            setMatch(true)
        }
        else {
            setMatch(false)
            setIsLoading(false)
        }
    }


    return (
        <ScrollToLeft className='w-screen h-screen bg-black flex justify-center items-center'>
            <Navbar title={'New Password'} />

            <div className="flex flex-col w-full p-5">
                <p className="text-4xl font-extrabold">New Password</p>
                <p className="text-sm font-thin">Kindly Create a new Password</p>

                <form onSubmit={updateNewPassword} className="flex flex-col gap-4 w-full mt-5">
                    <input
                        type="text"
                        placeholder="Password"
                        className={inputItem}
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />

                    <input
                        type="text"
                        placeholder="Confirm Password"
                        className={inputItem}
                        required
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }} />

                    {/* Error text */}
                    <div className={match ? 'text-sm invisible' : 'flex text-red-500 text-sm animate-pulse'}>Password&apos;s should match</div>

                    <CustomButton text={'Confirm Password'} type='submit' />

                    {/* Spining Progress Bar */}
                    <ProgressBar isLoading={isLoading} />


                </form>
            </div>

        </ScrollToLeft>
    )
}

export default NewPassword
