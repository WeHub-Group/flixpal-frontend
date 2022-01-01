import Navbar from '../../utils/reuseable/Navbar'
import { FaSearch } from 'react-icons/fa'
import ScrollToLeft from '../../utils/animations/ScrollToLeft'

const TrendingNow = () => {
    return (
        <ScrollToLeft className="bg-black h-screen w-screen">
            <Navbar title={'Trending Now'}
                extra={
                    <div> <FaSearch /> </div>
                }
            />

        </ScrollToLeft>
    )
}

export default TrendingNow
