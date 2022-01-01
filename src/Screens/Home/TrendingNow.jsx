import Navbar from '../../utils/reuseable/Navbar'
import { FaSearch } from 'react-icons/fa'

const TrendingNow = () => {
    return (
        <div className="bg-black h-screen w-screen">
            <Navbar title={'Trending Now'}
                extra={
                    <div> <FaSearch /> </div>
                }
            />

        </div>
    )
}

export default TrendingNow
