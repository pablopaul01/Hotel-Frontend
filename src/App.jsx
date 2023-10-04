import { useState } from 'react'
import RegisterView from './pages/RegisterView'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import GaleryPage from './pages/GaleryPage'
import NavHotel from './components/navBar/NavHotel'
import RoomsPage from './pages/RoomsPage'
import BookRoom from './pages/BookRoom'
import Room from './pages/Room'
import FooterHotel from './components/footer/FooterHotel'
import ScrollToTop from './helpers/ScrollToTop'
import Usuarios from './pages/Usuarios'
import RoomsAdmin from './pages/RoomsAdmin'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavHotel />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<RegisterView />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/galeria-imagenes' element={<GaleryPage />} />
        <Route path='/categoria-habitaciones' element={<RoomsPage />} />
        <Route path='/reserva-habitaciones' element={<BookRoom />} />
        <Route path='/reserva-habitaciones/:id' element={<Room />} />
        <Route path='/admin/users' element={<Usuarios />} />
        <Route path='/admin/rooms' element={<RoomsAdmin/>} />
      </Routes>
      <FooterHotel/>
    </>
  )
}

export default App
