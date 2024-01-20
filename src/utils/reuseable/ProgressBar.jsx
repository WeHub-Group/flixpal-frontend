import { WiRefresh } from "react-icons/wi"


// eslint-disable-next-line react/prop-types
function ProgressBar({ isLoading }) {
    return (
        <div className="flex justify-center items-center">
            <WiRefresh className={isLoading ? "animate-spin text-5xl" : 'invisible'} />
        </div>
    )
}

export default ProgressBar