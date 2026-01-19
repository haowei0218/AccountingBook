import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
