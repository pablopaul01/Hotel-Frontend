import { useState } from 'react'
import RegisterView from './pages/RegisterView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      En este lugar pondremos las rutas
      <RegisterView />
    </>
  )
}

export default App
