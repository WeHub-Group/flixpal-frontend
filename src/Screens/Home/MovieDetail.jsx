import { useParams } from "react-router-dom"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import Navbar from "../../utils/reuseable/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

const MovieDetail = ({ movie }) => {
    const { moviename } = useParams()

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
