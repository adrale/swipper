import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [profils, setProfils] = useState([]);

  return (
    <>
    <SwipperLogic profils={profils} />
    </>
  
  )}


export default App
