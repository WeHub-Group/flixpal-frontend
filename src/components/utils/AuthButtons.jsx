/* eslint-disable react/prop-types */

function AuthButton({ icon, name, onPressed }) {

    return (
        <div className="w-full justify-center h-10 rounded-lg p-5 border-2 border-[#474747] flex flex-row gap-2 items-center" onClick={onPressed}>
            <img src={icon} className="h-5 w-5" />
            <p className="text-white  text-sm">Continue with {name}</p>
        </div>
    )
}

export default AuthButton