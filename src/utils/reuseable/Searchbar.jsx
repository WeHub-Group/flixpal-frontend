import { FaSearch } from "react-icons/fa";



const Searchbar = () => {
    return (
        <div className="h-10 w-[70%] bg-darkGrey flex flex-row gap-3 items-center p-2 rounded-lg">
            <FaSearch />
            <input type="text" placeholder="Search" className="bg-transparent outline-none" />
        </div>
    )
}

export default Searchbar
