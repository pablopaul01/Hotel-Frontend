import { useState } from 'react'
import RegisterView from './pages/RegisterView'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import RoomsPage from './pages/RoomsPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<RegisterView />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/habitaciones' element={<RoomsPage />} />
      </Routes>
    </>
  )
}

export default App
