import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import GaleryPage from './pages/GaleryPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage /> */}
      <GaleryPage />
    </>
  )
}

export default App
