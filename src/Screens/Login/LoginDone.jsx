import { useNavigate } from "react-router-dom";
import ProgressBar from "../../utils/reuseable/ProgressBar";


function LoginDone({ username }) {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/home')
    }, 2500);

    return (
        <div className="bg-black w-screen h-screen flex flex-col gap-5 justify-center items-center">
            <p className="text-white text-4xl text-center">Welcome back {username}! <br /> Glad to see you, Again!</p>
            <ProgressBar isLoading={true} />
        </div>
    )
}
export default LoginDone