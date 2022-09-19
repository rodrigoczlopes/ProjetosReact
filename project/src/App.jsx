
import logo from './logo.svg'
import './App.css'
import { useState } from 'react'


  const elemento = <div><h2>Olá Rodrigo!</h2></div>

function App() {

  const [i, setI] = useState(0)
  const increment = () =>{
    setI(i+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {elemento}
       <button onClick={increment}>Incrementar {i} </button>
      </header>
    </div>
  )
}

export default App
