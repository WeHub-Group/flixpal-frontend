
const Loader = ({ section }) => {
    return (
        <div className="flex flex-row gap-2 justify-center items-center">
            <div className={section == 1 ? 'w-2 h-2 bg-purple rounded-[50%]' : 'w-2 h-2 bg-grey rounded-[50%]'}></div>
            <div className={section == 2 ? 'w-2 h-2 bg-purple rounded-[50%]' : 'w-2 h-2 bg-grey rounded-[50%]'}></div>
            <div className={section == 3 ? 'w-2 h-2 bg-purple rounded-[50%]' : 'w-2 h-2 bg-grey rounded-[50%]'}></div>
        </div >
    )
}

export default Loader
