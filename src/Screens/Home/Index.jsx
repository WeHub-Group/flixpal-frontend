import BottomTabBar from "../../utils/reuseable/BottomTabBar"
import Searchbar from "../../utils/reuseable/Searchbar"


const Index = () => {
    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            {/* Top NavBar */}
            <div className="p-4 flex flex-row items-center gap-3">

                <div className="h-10 w-10 rounded-full bg-userImageLinearGradient">
                    {/* userProfileImage */}
                </div>

                <div className="flex flex-col">
                    <p>Welcome back,</p>
                    <p>{12902292920}</p>
                </div>
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
                <p>Lorem ipsum dolor sit.</p>
            </div>

            {/* ______ */}
            <div className="w-full h-[55%] flex flex-col p-3 mb-16">
                <p>Lorem ipsum dolor sit.</p>
            </div>

            <BottomTabBar />
        </div>
    )
}

export default Index
