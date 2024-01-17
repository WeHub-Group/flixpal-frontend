/* eslint-disable react/prop-types */


const AuthTags = ({ icon, onPressed }) => {
    return (
        <div className="w-12 h-12 justify-center rounded-lg p-1 border-2 border-[#474747] flex flex-row gap-2 items-center" onClick={onPressed}>
            <img src={icon} className="h-4 w-4" />
        </div>
    )
}

export default AuthTags
