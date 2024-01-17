import { useNavigate } from "react-router-dom";
import icon from "../../assets/svg/icon.svg"
import Loader from "../../utils/reuseable/Loader";


const Loading = () => {
    const navigate = useNavigate()

    // This screen lasts for only 3 or so seconds
    setTimeout(() => {
        navigate("/2")
    }, 3500);

    return (
        <div className="w-screen h-screen bg-loadingPattern bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">

            <div className="flex flex-col gap-5">
                <img src={icon} alt="Flixpal Icon" className="w-16 h-16 animate-spin " />
                <Loader section={1} />
            </div>
        </div>
    )
}

export default Loading
