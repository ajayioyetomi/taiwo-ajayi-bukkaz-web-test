import { Route, Routes } from 'react-router-dom';
import {Login, Home} from '../views';
import { ProtectedRoutes } from '.';
import {PopUpProvider} from '../contexts'

const AppRouter = () => {
  return (
    <PopUpProvider>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} /> 
          <Route element={<ProtectedRoutes />}>
            <Route path='/Home' element={<Home />} />
          </Route>
      </Routes>
    </PopUpProvider>
  )
}

export default AppRouter