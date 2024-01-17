/* eslint-disable react/prop-types */
import NotFoundImage from '../../assets/svg/notfound.svg'


// Notfound can take in either "screen","full" or "[10vh]" as parameters


const NotFound = ({ height, width, message }) => {

    const fullscreenClass =
        `w-${width} h-${height} bg-screen bg-black flex flex-col justify-center items-center`

    return (
        <div className={fullscreenClass}>
            <img src={NotFoundImage} className='h-[30%] w-[35%]' />
            <p className="text-center text-2xl text-white"><span className='text-purple'>Oops!</span>Unable to locate</p>
            <p className='text-white text-center p-3'>{message}</p>
        </div>
    )
}

export default NotFound
