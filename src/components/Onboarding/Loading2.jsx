import Loader from "../../components/utils/Loader";
import groupImage from '../../assets/images/loading2group.png'




const Loading2 = () => {
    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            <img src={groupImage} className="h-[50%] w-full" alt="" />

            <div className="h-[50%] w-full">
                <Loader section={2} />
            </div>
        </div>
    )
}

export default Loading2
