'use client'

import { useSelector, useDispatch } from "react-redux"

const page = () => {
    const carrito = useSelector(state => state.misValores.miCarrito)
    const dispatch = useDispatch()
    return (
        <>
            {carrito.map((valor, indice) =>
                <div key={indice} >
                    <img onClick={() => eliminar()} src={valor.imagen} alt="" width="60" height="60" />
                </div >)
            }
        </>
    )
}

export default page
