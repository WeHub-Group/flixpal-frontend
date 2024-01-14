/* eslint-disable react/prop-types */
import { useState } from 'react'
import padlockIcon from '../../assets/svg/padlock.svg'
import visible from "../../assets/svg/eye.svg";
import hidden from "../../assets/svg/eye_slash.svg";



const PasswordInput = ({ placeholder, value, onChanged, ...props }) => {

    const [isPassword, setIsPassword] = useState(true)

    return (

        <div className="w-full p-3 rounded-lg bg-[#272828] flex flex-row  items-center justify-between">
            <div className="flex flex-row gap-3">
                <img src={padlockIcon} />
                <input
                    type={isPassword ? 'password' : 'text'}
                    autoComplete=''
                    placeholder={placeholder}
                    value={value}
                    onChange={onChanged}
                    {...props}
                    className='bg-transparent outline-none text-sm text-white ' />
            </div>

            <img src={isPassword ? hidden : visible} onClick={() => { setIsPassword(!isPassword) }} />
        </div>

    )
}

export default PasswordInput