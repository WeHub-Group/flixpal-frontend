import BottomTabBar from '../../utils/reuseable/BottomTabBar'
import Navbar from '../../utils/reuseable/Navbar'

const Download = () => {
    return (
        <div className='w-screen h-screen bg-black'>
            {/* Navbar */}
            <Navbar title={'Downloads'} />
            <BottomTabBar />
        </div>
    )
}

export default Download
