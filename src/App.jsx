import { useState } from 'react'
import './App.css'
import { Filtro } from './components/Filtro'
import { Search } from './components/Search'
import { PersonajesAleatorios } from './components/PersonajesAleatorios'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <Filtro val={setCount} />
      <Search valor={count} />
      <PersonajesAleatorios />
    </>
  )
}

export default App
