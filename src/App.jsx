import { useState } from 'react'
import RegisterView from './pages/RegisterView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterView />
    </>
  )
}

export default App
