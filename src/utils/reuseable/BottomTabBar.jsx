
import { Link, useLocation, useNavigate } from "react-router-dom";
import Downloads from "../../assets/svg/downloads.svg";
import Bookmarks from '../../assets/svg/list.svg';
import More from "../../assets/svg/more.svg";
import Home from '../../assets/svg/home.svg'


const BottomTabBar = () => {
    const navigate = useNavigate()
    const location = useLocation()


    return (
        <div className='fixed bottom-0 flex flex-row text-white justify-between items-center p-4 w-screen h-16 bg-purple text-xl'>
            <img src={Home} alt=""
                onClick={() => { alert('Home') }}
                className={location.pathname == '/home'
                    ? 'h-7 w-7 border-b-2 border-white p-1 rounded-xl' : 'h-4 w-4'
                }
            />

            <img src={Bookmarks} alt=""
                onClick={() => { alert('bookmarks') }}
                className={location.pathname == '/'
                    ? 'h-6 w-6' : 'h-4 w-4'
                } />

            <img src={Downloads} alt=""
                onClick={() => { alert('downloads') }}
                className={location.pathname == '/'
                    ? 'h-6 w-6' : 'h-4 w-4'
                } />

            <img src={More} alt=""
                onClick={() => { alert('more') }}
                className={location.pathname == '/'
                    ? 'h-6 w-6' : 'h-4 w-4'
                } />
        </div>
    )
}

export default BottomTabBar
