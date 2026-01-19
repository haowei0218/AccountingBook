import { Routes, Route } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import RegisterPage from '../features/auth/pages/RegisterPage'
import ForgetPassword from '../features/auth/pages/forgetPassword'
import MainContent from '../features/transactions/pages/MainContent'
function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/app' element={<MainContent />} />
    </Routes>
  )
}

export default AppRoutes
