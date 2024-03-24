/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Movie = ({ movie }) => {

    return (
        <Link to={movie.name} className='w-24 min-w-24 h-full flex flex-col gap-2 rounded-lg'>
            <img src={movie.cover} className="h-full w-24" />
            <p className="text-grey text-sm text-center">{movie.name}</p>
        </Link>
    )
}

export default Movie
