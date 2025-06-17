import { useState } from 'react'
import './styles/App.css'
import { NavBar} from './components/nav'
import Landing from './components/landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Landing />
    </>
  )
}

export default App
