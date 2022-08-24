import { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto



const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])


    const isInCart = ((id) => {
        return carrito.some(c=> c.id === id)
    })


    const agregarCarrito = (producto) => {

        if (isInCart(producto.id)) {
            const encontra = carrito.find(x => x.id === producto.id)
            const index = carrito.indexOf(encontra)
            const arr = [...carrito]
            arr[index].cantidad += cantidad
            setCarrito(arr)
        } else {
            setCarrito([...carrito, producto])
            setCantidad(cantidad + producto.cantidad);
        }
    }
    // 
    //     setCarrito(producto)

    console.log(carrito)
    const eliminarCarrito = () => {
        setCarrito([])
    }
    const valorDeContexto = {
        cantidad: cantidad,
        carrito: carrito,
        agregarCarrito,
        eliminarCarrito,
    }

    return (
        <Provider value={valorDeContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider