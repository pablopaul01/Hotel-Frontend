import { useState } from 'react'
import RegisterView from './pages/RegisterView'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/registro' element={<RegisterView />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
