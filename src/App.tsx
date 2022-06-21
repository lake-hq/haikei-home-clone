import { useState } from 'react'
import logo from './logo.svg'

import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
