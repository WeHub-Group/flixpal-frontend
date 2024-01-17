import { useNavigate } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi";
const BackButton = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => { navigate(-1) }} className="w-10 h-10 fixed left-0 top-0 text-xl text-white m-3">
            <HiArrowLeft />
        </div>
    )
}

export default BackButton
