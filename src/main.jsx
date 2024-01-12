import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Loading from './components/Onboarding/Loading'
import Loading2 from './components/Onboarding/Loading2'
<<<<<<< Updated upstream
=======
import Loading3 from './components/Onboarding/Loading3'
import Loading4 from './components/Onboarding/Loading4'

>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      {/* The onboarding screen routes */}
      <Route path='/'>
        <Route index element={<Loading />} />
        <Route path='2' element={<Loading2 />} />
<<<<<<< Updated upstream
=======
        <Route path='3' element={<Loading3 />} />
        <Route path='4' element={<Loading4 />} />
>>>>>>> Stashed changes
      </Route>



    </Routes>
  </BrowserRouter>,
)
