import Navbar from "../../utils/reuseable/Navbar"
import { FaSearch } from 'react-icons/fa'
import ScrollToLeft from '../../utils/animations/ScrollToLeft'


const LatestShows = () => {
    return (
        <ScrollToLeft className="bg-black h-screen w-screen">
            < Navbar title={'Latest Shows'}
                extra={
                    < div > <FaSearch /> </div >
                } />


        </ScrollToLeft >
    )
}

export default LatestShows
