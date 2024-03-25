import { FaCalendar, FaPhone } from "react-icons/fa"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import CustomButton from "../../utils/reuseable/CustomButton"
import Navbar from "../../utils/reuseable/Navbar"
import NormalInput from "../../utils/reuseable/NormaInput"
import UsernameIcon from '../../utils/reuseable/UsernameIcon'

const AccountSetup1 = () => {

    function done() {
        console.log('l');
    }

    return (
        <ScrollToLeft className='bg-black h-screen w-screen flex flex-col justify-center items-center gap-4 p-4'>
            <Navbar title={'Account Setup'} />

            <p className="text-3xl">Let&apos;s get to know you</p>
            <div className="w-full flex flex-col gap-3">
                <NormalInput type={'text'} icon={<UsernameIcon />} placeholder={'Username'} />
                <NormalInput type={'tel'} icon={<FaPhone />} placeholder={'Phone Number'} />
                <NormalInput type={'date'} icon={<FaCalendar />} placeholder={'Birth Date'} />
                {/* select option */}
                <CustomButton text={'Done'} onPressed={done} />
            </div>

        </ScrollToLeft>
    )
}

export default AccountSetup1
