import { useParams } from "react-router-dom"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import Navbar from "../../utils/reuseable/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

const MovieDetail = () => {
    const { moviename } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        // Trying to fetch from the json file
        axios.get(import.meta.env.VITE_BACKEND_URL)
            .then(async (result) => {
                // Filter out that particular movie
                await setMovie(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <ScrollToLeft classname='bg-black h-screen w-screen'>
            <Navbar title={moviename} />
            <div className="w-full h-[50%]">
                <img src="" alt="" />
            </div>
            <p>{ }</p>
        </ScrollToLeft>
    )
}

export default MovieDetail
