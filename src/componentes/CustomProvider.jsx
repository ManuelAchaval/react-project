import { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto



const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])


    const isInCart = ((id) => {
        return carrito.some(c => c.id === id)
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


    const eliminarItem = (id) => {
        return setCarrito(carrito.filter(element => element.id !== id))
        
    }

    const eliminarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const getItemPrice = () => {
        return carrito.reduce((acc, x) => acc += x.cantidad * x.price, 0)
    }
    const valorDeContexto = {
        cantidad: cantidad,
        carrito: carrito,
        agregarCarrito,
        eliminarCarrito,
        eliminarItem,
        getItemPrice,
    }

    return (
        <Provider value={valorDeContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider