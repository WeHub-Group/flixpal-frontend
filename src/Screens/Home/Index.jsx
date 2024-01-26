import ScrollToTop from "../../utils/animations/ScrollToTop"
import BottomTabBar from "../../utils/reuseable/BottomTabBar"


const Index = () => {
    return (
        <ScrollToTop className='w-screen h-screen bg-black'>
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

            <BottomTabBar />
        </ScrollToTop>
    )
}

export default Index
