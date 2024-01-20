import { useState } from "react"
import Navbar from "../../utils/reuseable/Navbar"
import CustomButton from "../../utils/reuseable/CustomButton"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"


const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const inputItem = 'h-14 bg-transparent p-2 outline-none border-white border-2 roun'

    function updateNewPassword(e) {
        e.preventDefault();
        console.log('Updating');
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
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />

                    <input
                        type="text"
                        placeholder="Confirm Password"
                        className={inputItem}
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }} />

                    <CustomButton text={'Confirm Password'} type='submit' />
                </form>
            </div>

        </ScrollToLeft>
    )
}

export default NewPassword
