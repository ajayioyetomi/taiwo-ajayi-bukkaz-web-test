import { Route, Routes } from 'react-router-dom';
import {Login, Home} from '../views';
import {PopUpProvider} from '../contexts'

const AppRouter = () => {
  return (
    <PopUpProvider>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
      </Routes>
    </PopUpProvider>
  )
}

export default AppRouter