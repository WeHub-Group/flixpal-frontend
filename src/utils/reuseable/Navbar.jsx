/* eslint-disable react/prop-types */
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const Navbar = ({ title, extra }) => {
    const navigate = useNavigate()

    return (
        <div className="w-screen h-16 fixed top-0 bg-black flex flex-row gap-5 items-center p-5">
            <HiArrowLeft onClick={() => { navigate(-1) }} className="text-xl text-white" />
            <p className="">{title}</p>
        </div>
    )
}

export default Navbar
