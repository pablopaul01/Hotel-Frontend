import { useState } from 'react'
import RegisterView from './pages/RegisterView'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import GaleryPage from './pages/GaleryPage'
import NavHotel from './components/navBar/NavHotel'
<<<<<<< HEAD
import FooterHotel from './components/footer/FooterHotel'
=======
import RoomsPage from './pages/RoomsPage'
>>>>>>> 7b7b8874e3485d8f0b6d3d8828d027ae288ee91d


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavHotel />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<RegisterView />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/galeria-imagenes' element={<GaleryPage />} />
        <Route path='/categoria-habitaciones' element={<RoomsPage />} />
      </Routes>
      <FooterHotel/>
    </>
  )
}

export default App
