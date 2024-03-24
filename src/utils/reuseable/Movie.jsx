/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Movie = ({ movie }) => {

    return (
        <Link to={movie.name} className='w-24 flex flex-col h-full rounded-lg'>
            <img src={movie.cover} className="h-full w-full" />
            <p className="text-grey text-sm text-center bottom-0">{movie.name}</p>
        </Link>
    )
}

export default Movie
