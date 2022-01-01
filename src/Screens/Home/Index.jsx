import BottomTabBar from "../../utils/reuseable/BottomTabBar"
import Searchbar from "../../utils/reuseable/Searchbar"
import { FaBell } from "react-icons/fa"
import { Link } from "react-router-dom"


const Index = () => {
    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            {/* Top NavBar */}
            <div className="p-4 flex flex-row justify-between items-center gap-3">

                <div className="flex flex-row items-center">
                    <div className="h-10 w-10 p-1 rounded-full bg-userImageLinearGradient">
                        <img src="/src/assets/images/user.jpg" className="rounded-full" alt="" />
                    </div>

                    <div className="flex flex-col ml-3">
                        <p>Welcome back,</p>
                        <p>{12902292920}</p>
                    </div>
                </div>

                <Link to={'notifications'} className=""><FaBell size={24} /></Link>
            </div>


            {/* Active Search bar */}
            <div className="flex justify-center items-center">
                <Searchbar />
            </div>

            {/* Movie Carousel */}
            <div className="w-full h-full flex flex-col">
            </div>


            {/* Latest Shows */}
            <div className="w-full h-[55%] flex flex-col p-3">
                <div className="flex w-full justify-between items-center">
                    <p className="text-lg font-semibold">Latest Shows</p>
                    <Link to={'latestshows'} className="text-min underline">Show all</Link>
                </div>
            </div>

            {/* ______ */}
            <div className="w-full h-[55%] flex flex-col p-3 mb-16">
                <div className="flex w-full justify-between items-center">
                    <p className="text-lg font-semibold">Trending Now</p>
                    <Link to={'trendingnow'} className="text-min underline">Show all</Link>
                </div>
            </div>

            <BottomTabBar />
        </div>
    )
}

export default Index
