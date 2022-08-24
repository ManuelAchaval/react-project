import { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto



const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0)
    const[carrito,setCarrito]=useState([])
    
    const agregarCarrito = (producto) => {
        setCantidad (cantidad + producto.cantidad);
        console.log(producto)
        console.log(cantidad)
    }
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