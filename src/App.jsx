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
import Usuarios from './pages/Usuarios'
import RoomsAdmin from './pages/RoomsAdmin'
import SearchDate from './components/date/SearchDate.jsx'


function App() {

  return (
    <>
      <SearchDate />
      {/* <NavHotel /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<RegisterView />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/galeria-imagenes' element={<GaleryPage />} />
        <Route path='/categoria-habitaciones' element={<RoomsPage />} />
        <Route path='/reserva-habitaciones' element={<BookRoom />} />
        <Route path='/reserva-habitaciones/:id' element={<Room />} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/admin/rooms' element={<RoomsAdmin/>} />
      </Routes>
    </>
  )
}

export default App
