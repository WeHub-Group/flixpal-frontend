/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import Movie from "./Movie"
import { useEffect, useState } from "react"

const ListWrapper = ({ direction }) => {

    const [movies, setMovies] = useState([{}])


    useEffect(() => {
        // Trying to fetch from the json file
        axios.get(import.meta.env.VITE_BACKEND_URL)
            .then(async (result) => {
                await setMovies(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className={
            direction == 'vertical' ?
                "h-full w-full overflow-scroll grid grid-cols-2 mt-6 justify-items-center p-1" :
                "h-full w-full overflow-scroll flex flex-row gap-3 p-1"}
        >

            {/* Mapping through all the movies and returning a list */}
            {
                movies.map(movie => {
                    return (<Movie movie={movie} key={movie.id} />)
                })
            }

        </div >
    )
}

export default ListWrapper
