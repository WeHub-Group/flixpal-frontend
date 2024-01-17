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


      {/* Signup routes */}
      <Route path='/signup'>
        <Route index element={<SignUp />} />
        <Route path='verifyemail' element={<VerifyEmail />} />
        <Route path='verifyemail/allset' element={<AllSet />} />
      </Route>

      <Route path='/login'>
        <Route index element={<Login1 />} />
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
