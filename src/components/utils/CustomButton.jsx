
// Takes in a text and a onClick Fucntion
const CustomButton = ({ text, onPressed }) => {
    return (
        <div className="bg-purple p-3  text-white uppercase font-semibold rounded-lg text-center" onClick={onPressed}>
            {text}
        </div>
    )
}

export default CustomButton
