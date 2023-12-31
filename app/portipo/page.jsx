'use client'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Ficha from "../components/Ficha"
import estilos from "../productos/productos.module.css"


const page = () => {
    const categoria = useSelector(state => state.misValores.categoria)
    const [contenido, setContenido] = useState("")

    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            const datos = await respuesta.json()
            setContenido(() => datos.map(valor =>
                <Ficha keu={valor.id} valor={valor} />
            ))
        }
        obtenerDatos()
    }, [categoria])

    return (
        <>
            <div className={estilos.productos}>
                {contenido}
            </div>
        </>
    )
}

export default page
