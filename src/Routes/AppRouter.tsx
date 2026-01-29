import { Route, Routes } from 'react-router-dom';
import {Login, Home} from '../views';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
    </Routes>
  )
}

export default AppRouter