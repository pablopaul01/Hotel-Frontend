import { useState } from 'react'
import LoginPage from './pages/LoginPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      En este lugar pondremos las rutas
      <LoginPage />
    </>
  )
}

export default App
