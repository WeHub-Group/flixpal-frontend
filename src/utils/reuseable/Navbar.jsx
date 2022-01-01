/* eslint-disable react/prop-types */
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const Navbar = ({ title, extra }) => {
    const navigate = useNavigate()

    return (
        <div className="w-screen h-16 fixed top-0 bg-black flex flex-row justify-between gap-5 items-center p-5">
            <div className="flex flex-row items-center">
                <HiArrowLeft onClick={() => { navigate(-1) }} className="text-xl text-white" />
                <p className="ml-3 text-lg">{title}</p>
            </div>

            <div className="">{extra}</div>
        </div>
    )
}

export default Navbar
