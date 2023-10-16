import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterView from './pages/RegisterView'
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
import PrivateRoutesUser from './Routes/PrivateRoutesUser'
import PrivateRoutesAdmin from './Routes/PrivateRoutesAdmin'
import Error404 from './pages/404'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'




function App() {
  const [isLogged, setIsLogged] = useState(()=>{
    return !!localStorage.getItem('token') || false
  })
  const isAuthenticated = !!localStorage.getItem('token');
  
  return (
    <>
      <NavHotel isLogged={isLogged} setIsLogged={setIsLogged}/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={!isAuthenticated && <RegisterView />} />
        <Route path='/login' element={!isAuthenticated && <LoginPage setIsLogged={setIsLogged}/>} />
        <Route path='/galeria-imagenes' element={<GaleryPage />} />
        <Route path='/categoria-habitaciones' element={<RoomsPage />} />
        <Route path='/reserva-habitaciones/:id' element={<Room />} />
        <Route path='*' element={<Error404 />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />

        <Route element={<PrivateRoutesUser />}>
          <Route path='/reserva-habitaciones' element={<BookRoom />} />
        </Route>
        
        <Route element={<PrivateRoutesAdmin />}>
          <Route path='/admin/users' element={<Usuarios />} />
          <Route path='/admin/rooms' element={<RoomsAdmin />} />
        </Route>
      </Routes>
      <FooterHotel />
    </>
  )
}

export default App
