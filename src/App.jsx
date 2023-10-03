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
        <Route path='/reserva-habitaciones' element={<BookRoom />} />
        <Route path='/reserva-habitaciones/:id' element={<Room />} />
      </Routes>
      <FooterHotel/>
    </>
  )
}

export default App
