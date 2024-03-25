import { FaCalendar, FaMale, FaPhone } from "react-icons/fa"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import CustomButton from "../../utils/reuseable/CustomButton"
import Navbar from "../../utils/reuseable/Navbar"
import NormalInput from "../../utils/reuseable/NormaInput"
import UsernameIcon from '../../utils/reuseable/UsernameIcon'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const AccountSetup1 = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [telephone, setTelephone] = useState("")
    const [dob, setDob] = useState("")
    const [sex, setSex] = useState("")



    function done() {
        // localStorage.setItem(import.meta.env.VITE_USER_USERNAME, username)
        // localStorage.setItem(import.meta.env.VITE_HAS_LOGGED_IN, true)
        console.log(username, telephone, dob, sex);
        // navigate('/home')
    }

    return (
        <ScrollToLeft className='bg-black h-screen w-screen flex flex-col justify-center items-center gap-4 p-4'>
            <Navbar title={'Account Setup'} />

            <p className="text-3xl">Let&apos;s get to know you</p>
            <div className="w-full flex flex-col gap-4">
                <NormalInput type={'text'} icon={<UsernameIcon />} placeholder={'Username'} value={username} onChanged={(e) => { setUsername(e.target.value) }} />

                <NormalInput type={'tel'} icon={<FaPhone />} placeholder={'Phone Number'} value={telephone} onChanged={(e) => { setTelephone(e.target.value) }} />

                <NormalInput type={'date'} icon={<FaCalendar />} placeholder={'Birth Date'} value={dob} onChanged={(e) => { setDob(e.target.value) }} />

                {/* select option */}
                <select className="w-full p-3 rounded-lg bg-darkGrey flex flex-row gap-3 items-center outline-none" value={sex} onSelectCapture={(e) => { setSex(e.target.value) }}>
                    <option value="Male">Male</option>
                    <option value="Femal">Female</option>
                    <option value="Custom">Custom</option>
                </select>
                <CustomButton text={'Done'} onPressed={done} />
            </div>

        </ScrollToLeft>
    )
}

export default AccountSetup1
