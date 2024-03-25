/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import MovieDetail from "../../Screens/Home/MovieDetail"

const Movie = ({ movie }) => {

    // OnClick open the movie detail page and pass info through the params


    return (
        <div className='w-24 min-w-24 h-full flex flex-col gap-2 rounded-lg'>
            <img src={movie.cover} className="h-full w-24" />
            <p className="text-grey text-sm text-center">{movie.name}</p>
        </div>
    )
}

export default Movie
