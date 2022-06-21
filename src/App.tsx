import { useState } from 'react'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />  
      <HomePage />
    </div>
  )
}

export default App
