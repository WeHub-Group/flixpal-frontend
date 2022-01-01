import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import Navbar from "../../utils/reuseable/Navbar"

const Notifications = () => {
    return (
        <ScrollToLeft className='w-screen h-screen bg-black'>
            <Navbar title={'Notification'} />

        </ScrollToLeft>
    )
}

export default Notifications
