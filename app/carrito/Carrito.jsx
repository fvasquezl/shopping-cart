'use client'

import { useSelector, useDispatch } from "react-redux"
import estilos from "./carrito.module.css"
import { useMemo, useState } from "react"
import { devolver } from "@/store/miSlice"



const page = () => {
    const [total, setTotal] = useState(0)

    const carrito = useSelector(state => state.misValores.miCarrito)
    const dispatch = useDispatch()

    const calculaTotal = useMemo(() => setTotal(carrito.reduce((acumulador, valorActual) =>
        acumulador + valorActual.precio, 0)), [carrito])

    const eliminar = (producto) => {
        dispatch(devolver(producto))
    }

    return (
        <>
            <div>{total}</div>
            <div className={estilos.miCarrito}>
                {carrito.length > 0
                    ?
                    (carrito.map((valor, indice) =>
                        <div key={indice} >
                            <img onClick={() => eliminar(valor.producto)} src={valor.imagen} alt="" width="60" height="60" />
                        </div >))
                    :
                    (<div>(No hay productos en el carrito)</div>)
                }
            </div>
        </>
    )
}

export default page
