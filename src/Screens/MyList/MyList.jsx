import BottomTabBar from '../../utils/reuseable/BottomTabBar'
import emptyListImage from '../../assets/svg/clipboard.svg'
import Navbar from '../../utils/reuseable/Navbar'

const MyList = () => {
    const [movieslist, setMoviesList] = ['']
    console.log(movieslist.length);

    return (
        <div className='w-screen h-screen bg-black'>
            <Navbar title={'My List'} />

            {/* When list is empty */}
            {
                movieslist.length == 0 &&
                <div className="h-full w-full flex flex-col gap-3 justify-center items-center p-4">

                    <img src={emptyListImage} alt="" />
                    <p className='font-bold text-2xl'>Your List is Empty</p>
                    <p className='text-center text-sm'>It seems that you haven&apos;t added any movies to the list</p>

                </div>
            }


            {/* When list is greater than 0 */}
            {
                movieslist.length > 0 &&
                <div className="h-full w-full flex flex-col gap-3 justify-center items-center p-4">

                </div>
            }

            <BottomTabBar />
        </div>
    )
}

export default MyList
