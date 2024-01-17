/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import sendIcon from '../../assets/svg/Send_fill.svg'

const NormalInput = ({ icon, type, placeholder, value, onChanged, ...props }) => {
    return (
        <div className='w-full p-3 rounded-lg bg-inputBackground flex flex-row gap-3 items-center'>
            <img src={sendIcon} className="text-white bg-none text-lg h-6 w-6" />
            <input type={type}
                autoComplete=''
                placeholder={placeholder}
                value={value}
                onChange={onChanged}
                {...props}
                className='bg-transparent outline-none text-sm text-white' />
        </div>
    )
}

export default NormalInput
