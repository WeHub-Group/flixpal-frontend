/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import Movie from "./Movie"
import { useEffect } from "react"

const ListWrapper = ({ direction }) => {
    let movies = []


    useEffect(() => {
        // Trying to fetch from the json file
        axios.get('/src/utils/db/Movies.json')
            .then(async (result) => {
                movies = await result.data
                console.log(`movies: ` + movies.name);
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className={
            direction == 'vertical' ?
                "h-full w-full overflow-scroll flex flex-col gap-3 p-1" :
                "h-full w-full overflow-scroll flex flex-row gap-3 p-1"}
        >

            {/* Mapping through all the movies and returning a list */}
            {movies.map(movie => {
                return (<Movie movie={movie} key={movie.id} />)
            })}

        </div >
    )
}

export default ListWrapper
