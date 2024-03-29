import { motion } from 'framer-motion'
import checkSvg from '../../assets/svg/check.svg'
import CustomButton from '../../utils/reuseable/CustomButton'
import { useNavigate } from 'react-router-dom'


const PasswordChangeDone = () => {
    const navigate = useNavigate()

    return (
        <div className='bg-black w-screen h-screen flex justify-center items-center p-5'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, type: 'spring' }}
                className="w-full flex flex-col bg-darkGrey rounded-lg p-3 gap-4">
                <div className="bg-green rounded-full h-28 w-28 p-3 flex justify-center items-center self-center">
                    <img src={checkSvg} />
                </div>

                <p className="text-center text-2xl font-extrabold">Congratulations!</p>
                <p className='text-center text-sm'>Your account ready to use. You will be redirected to the home page  </p>

                <CustomButton text='Explore Now' onPressed={() => { navigate('/login') }} className={'uppercase'} />
            </motion.div>
        </div >
    )
}

export default PasswordChangeDone
