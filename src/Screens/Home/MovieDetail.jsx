import { useParams } from "react-router-dom"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import Navbar from "../../utils/reuseable/Navbar"

const MovieDetail = () => {
    const { moviename } = useParams()
    // Pass movie details from the other screen


    return (
        <ScrollToLeft classname='bg-black h-screen w-screen'>
            <Navbar title={moviename} />
            <div className="w-full h-[50%]"></div>
        </ScrollToLeft>
    )
}

export default MovieDetail
