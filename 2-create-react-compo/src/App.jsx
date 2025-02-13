import { useState } from 'react'
import './App.css'
import PLButton from './PLButton'
import DyHello from './DyHello';

function App() {
  const[color, setColor] = useState('yellow');

  function colorChange() {
    setColor(color === 'yellow' ? 'Green' : 'yellow');
  }
  return (
    <div>
      <h1>React App create - Pradip</h1>
      <PLButton onClick={colorChange} color={color}/>
      <DyHello/>
    </div>
  )
}

export default App
