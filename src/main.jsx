import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Loading from './Screens/Onboarding/Loading'
import Loading2 from './Screens/Onboarding/Loading2'
import Loading3 from './Screens/Onboarding/Loading3'
import Loading4 from './Screens/Onboarding/Loading4'
import SignUp from './Screens/Onboarding/Signup'
import VerifyEmail from './Screens/Onboarding/VerifyEmail'
import NotFound from './Screens/NotFound/NotFound'
import AllSet from './Screens/Onboarding/AllSet'
import Login1 from './Screens/Login/Login1'
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword'
import Verification from './Screens/ForgotPassword/Verification'
import NewPassword from './Screens/ForgotPassword/NewPassword'
import PasswordChangeDone from './Screens/ForgotPassword/PasswordChangeDone'
import Index from './Screens/Home/Index'
import LoginDone from "./Screens/Login/LoginDone";
import MyList from './Screens/MyList/MyList'
import Download from './Screens/Dowmload/Download'
import More from './Screens/More/More'
import LatestShows from './Screens/Home/LatestShows'
import TrendingNow from './Screens/Home/TrendingNow'
import Notifications from './Screens/Home/Notifications'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      {/* The onboarding screen routes */}
      <Route path='/'>
        <Route index element={<Loading />} />
        <Route path='2' element={<Loading2 />} />
        <Route path='3' element={<Loading3 />} />
        <Route path='4' element={<Loading4 />} />
      </Route>


      {/* Signup and Verify Email routes */}
      <Route path='/signup'>
        <Route index element={<SignUp />} />
        <Route path='verifyemail/:email' element={<VerifyEmail />} />
        <Route path='verifyemail/:email/allset' element={<AllSet />} />
      </Route>


      {/* Login routes */}
      <Route path='/login'>
        <Route index element={<Login1 />} />
        <Route path='done' element={<LoginDone />} />
      </Route>

      {/* Forgot Password */}
      <Route path='forgotpassword'>
        <Route index element={<ForgotPassword />} />
        <Route path='verification/:email' element={<Verification />} />
        <Route path='change/:email' element={<NewPassword />} />
        <Route path='done' element={<PasswordChangeDone />} />
      </Route>

      {/* Home route */}
      <Route path='/home'>
        <Route index element={<Index />} />
        <Route path='latestshows' element={<LatestShows />} />
        <Route path='trendingnow' element={<TrendingNow />} />
        <Route path='notifications' element={<Notifications />} />
      </Route>

      {/* My Movies List route*/}
      <Route path='/mylist'>
        <Route index element={<MyList />} />
      </Route>


      {/* Downloads route */}
      <Route path='/downloads'>
        <Route index element={<Download />} />
      </Route>

      {/* More route */}
      <Route path='/more'>
        <Route index element={<More />} />
      </Route>


      {/* 404 Route */}
      <Route path='*'
        element={<NotFound
          height={'screen'}
          width={'screen'}
          message={'Apologies, the entered keyword cannot be located. Please double-check or attempt a search using different keywords.'} />} />

    </Routes>
  </BrowserRouter>,
)
