import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from './Reducer.component'
import Redu from './Reducer.component'
import Reducer from './Reducer.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Test/> */}
      {/* <Redu/> */}
      <Reducer/>
    </div>
  )
}

export default App
