import BottomTabBar from "../../utils/reuseable/BottomTabBar"
import ListWrapper from "../../utils/reuseable/ListWrapper"
import Movie from "../../utils/reuseable/Movie"
import Searchbar from "../../utils/reuseable/Searchbar"
import { FaBell } from "react-icons/fa"
import { Link } from "react-router-dom"

// Useless TEST Import 
import image1 from "../../assets/images/signup.jpg"
import { useState } from "react"

const Index = () => {

    const [username, setUsername] = useState('placeholder')


    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            {/* Top NavBar */}
            <div className="p-4 flex flex-row justify-between items-center gap-3">

                <div className="flex flex-row items-center">
                    <div className="h-10 w-10 p-1 rounded-full bg-userImageLinearGradient">
                        <img src="/src/assets/images/user.jpg" className="rounded-full" alt="" />
                    </div>

                    <div className="flex flex-col ml-3">
                        <p className="font-extrabold">
                            Welcome back,
                        </p>
                        <p>{'Travis'}</p>
                    </div>
                </div>

                <Link to={'notifications'} className=""><FaBell size={24} /></Link>
            </div>


            {/* Active Search bar */}
            <div className="flex justify-center items-center">
                <Searchbar />
            </div>

            {/* Movie Carousel */}
            <div className="w-full h-[60%] flex flex-col">
            </div>


            {/* Latest Shows */}
            <div className="w-full h-[30%] flex flex-col p-3">
                <div className="flex w-full justify-between items-center">
                    <p className="text-lg font-semibold">Latest Shows</p>
                    <Link to={'latestshows'} className="text-min underline">Show all</Link>
                </div>

                <ListWrapper />
            </div>


            {/* Trending Now */}
            <div className="w-full h-[30%] flex flex-col p-3 mb-16">
                <div className="flex w-full justify-between items-center">
                    <p className="text-lg font-semibold">Trending Now</p>
                    <Link to={'trendingnow'} className="text-min underline">Show all</Link>
                </div>

                <ListWrapper />
            </div>

            <BottomTabBar />
        </div>
    )
}

export default Index
