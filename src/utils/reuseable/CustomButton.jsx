
// Takes in a text and a onClick Fucntion
// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, onPressed, className, ...props }) => {
    return (
        <button
            className={
                `bg-purple p-3 flex justify-center items-center  text-white uppercase font-semibold rounded-lg text-center ${className}`
            }
            onClick={onPressed}
            {...props}
        >
            {text}
        </button>
    )
}

export default CustomButton
