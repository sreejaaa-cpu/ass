import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <header className="App-header">
        <h1>My Name: John Doe</h1>
        <p>Email: johndoe@example.com</p>
        <p>Phone: 123-456-7890</p>
      </header>
    </div>
    </>
  )
}

export default App
