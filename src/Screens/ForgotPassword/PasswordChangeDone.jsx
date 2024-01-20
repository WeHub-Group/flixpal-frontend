import checkSvg from '../../assets/svg/check.svg'
import CustomButton from '../../utils/reuseable/CustomButton'


const PasswordChangeDone = () => {

    return (
        <div className='bg-black w-screen h-screen flex justify-center items-center p-5'>
            <div className="w-full flex flex-col bg-darkGrey rounded-lg p-3 gap-4">
                <div className="bg-green rounded-full h-28 w-28 p-3 flex justify-center items-center self-center">
                    <img src={checkSvg} />
                </div>

                <p className="text-center text-2xl font-extrabold">Congratulations!</p>
                <p className='text-center text-sm'>Your account ready to use. You will be redirected to the home page  </p>

                <CustomButton text='Explore Now' className={'uppercase'} />
            </div>
        </div>
    )
}

export default PasswordChangeDone
