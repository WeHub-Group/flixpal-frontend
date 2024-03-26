import { FaCalendar, FaMale, FaPhone } from "react-icons/fa"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import CustomButton from "../../utils/reuseable/CustomButton"
import Navbar from "../../utils/reuseable/Navbar"
import NormalInput from "../../utils/reuseable/NormaInput"
import UsernameIcon from '../../utils/reuseable/UsernameIcon'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import ProgressBar from "../../utils/reuseable/ProgressBar";

const AccountSetup1 = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [telephone, setTelephone] = useState("")
    const [dob, setDob] = useState("")
    const [sex, setSex] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const sexOptions = [
        'Male',
        'Female',
        'Custom'
    ];
    const onSexChangedListener = (e) => {
        setSex(e.target.value);
    };


    function done() {
        setLoading(true)
        setTimeout(() => {
            localStorage.setItem(import.meta.env.VITE_USER_USERNAME, username)
            localStorage.setItem(import.meta.env.VITE_HAS_LOGGED_IN, true)
            console.log(username, telephone, dob, sex);
            navigate('/home')
        }, 2000);
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
                <select className="w-full p-3 rounded-lg bg-darkGrey flex flex-row gap-3 items-center outline-none" onChange={onSexChangedListener}>
                    <option>Please choose one option</option>
                    {sexOptions.map((option, index) => {
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        );
                    })}
                </select>

                <CustomButton text={'Done'} onPressed={done} />

                <ProgressBar isLoading={loading} />
            </div>

        </ScrollToLeft>
    )
}

export default AccountSetup1
