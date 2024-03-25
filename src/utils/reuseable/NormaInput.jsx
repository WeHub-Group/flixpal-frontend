/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const NormalInput = ({ type, placeholder, icon, value, onChanged, ...props }) => {

    return (
        <div className='w-full p-3 rounded-lg bg-darkGrey flex flex-row gap-3 items-center'>
            {
                icon
            }
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
