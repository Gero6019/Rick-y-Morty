import { useRef } from "react"

export const Filtro = ({ val }) => {

    const inputRef = useRef()
    return <>
        <input ref={inputRef} type="text" placeholder="Ingresá el nombre de tu personaje" />
        <button onClick={() => val(inputRef.current.value)}> Buscar</button>
    </>


}