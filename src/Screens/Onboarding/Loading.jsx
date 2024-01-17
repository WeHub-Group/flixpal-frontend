import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/ICON 1.png"
import Loader from "../../utils/reuseable/Loader";


const Loading = () => {
    const navigate = useNavigate()

    // This screen lasts for only 3 or so seconds
    setTimeout(() => {
        navigate("/2")
    }, 3500);

    return (
        <div className="w-screen h-screen bg-loadingPattern bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">

            <div className="">
                <img src={icon} alt="Flixpal Icon" className="w-30 h-28" />
                <Loader section={1} />
            </div>
        </div>
    )
}

export default Loading
