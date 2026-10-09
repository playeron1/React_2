import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id="center">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increment
      </button>
    </main>
  )
}

export default App
