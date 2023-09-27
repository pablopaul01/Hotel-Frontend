import { useState } from 'react'
import NavBar from './components/navBar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
    </>
  )
}

export default App
