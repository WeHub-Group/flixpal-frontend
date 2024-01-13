import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './screens/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Loading from './components/Onboarding/Loading'
import Loading2 from './components/Onboarding/Loading2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      {/* The onboarding screen routes */}
      <Route path='/'>
        <Route index element={<Loading />} />
        <Route path='2' element={<Loading2 />} />
        <Route path='signup' element={<SignUp />} />
      </Route>



    </Routes>
  </BrowserRouter>,
)
