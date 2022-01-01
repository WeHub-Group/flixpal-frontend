import Navbar from "../../utils/reuseable/Navbar"
import { FaSearch } from 'react-icons/fa'


const LatestShows = () => {
    return (
        <div className="bg-black h-screen w-screen">
            <Navbar title={'Latest Shows'}
                extra={
                    <div> <FaSearch /> </div>
                } />


        </div>
    )
}

export default LatestShows
