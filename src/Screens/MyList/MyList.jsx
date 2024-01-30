import BottomTabBar from '../../utils/reuseable/BottomTabBar'
import emptyListImage from '../../assets/svg/clipboard.svg'
import Navbar from '../../utils/reuseable/Navbar'

const MyList = () => {
    const [movieslist, setMoviesList] = []

    return (
        <div className='w-screen h-screen bg-black'>
            <Navbar title={'My List'} />
            <div className="h-full w-full flex flex-col gap-3 justify-center items-center p-4">

                <img src={emptyListImage} alt="" />
                <p className='font-bold text-2xl'>Your List is Empty</p>
                <p className='text-center text-sm'>It seems that you haven&apos;t added any movies to the list</p>

            </div>
            <BottomTabBar />
        </div>
    )
}

export default MyList
