
import { Link, useLocation, useNavigate } from "react-router-dom";
import Downloads from "../../assets/svg/downloads.svg";
import Bookmarks from '../../assets/svg/list.svg';
import More from "../../assets/svg/more.svg";
import Home from '../../assets/svg/home.svg'


const BottomTabBar = () => {
    const navigate = useNavigate()
    const location = useLocation()


    return (
        <div className='fixed bottom-0 flex flex-row text-white justify-between items-center p-4 w-screen h-16 bg-black border-t-darkGrey border-t-2 text-xl'>

            <img src={Home} alt=""
                onClick={() => { navigate('/home') }}
                className={location.pathname == '/home'
                    ? 'h-7 w-7 border-b-2 border-white p-1 rounded-xl' : 'h-4 w-4'
                }
            />

            <img src={Bookmarks} alt=""
                onClick={() => { navigate('/mylist') }}
                className={location.pathname == '/mylist'
                    ? 'h-7 w-7 border-b-2 border-white p-1 rounded-xl' : 'h-4 w-4'
                } />

            <img src={Downloads} alt=""
                onClick={() => { navigate('/downloads') }}
                className={location.pathname == '/downloads'
                    ? 'h-7 w-7 border-b-2 border-white p-1 rounded-xl' : 'h-4 w-4'
                } />

            <img src={More} alt=""
                onClick={() => { navigate('/more') }}
                className={location.pathname == '/more'
                    ? 'h-7 w-7 border-b-2 border-white p-1 rounded-xl' : 'h-4 w-4'
                } />

        </div>
    )
}

export default BottomTabBar
