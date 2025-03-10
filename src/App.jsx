import { useState } from 'react'
import './App.css'
import { Filtro } from './components/Filtro'
import { Buscar } from './components/Buscar'
import { PersonajesAleatorios } from './components/PersonajesAleatorios'

function App() {
  const [nombre, setNombre] = useState('')

  return (
    <>
      <Filtro setNombre={setNombre} />
      <Buscar nombre={nombre}/>
      <PersonajesAleatorios />
    </>
  )
}

export default App
