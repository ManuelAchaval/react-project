import Page from "../pagina/Page"
import '../item/Item.scss'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../CustomProvider"



const Cart = () => {
    const { carrito, eliminarItem, eliminarCarrito } = useContext(contexto)



    if (carrito.length > 0) {
        return (<>
            <div className="carrito">
                {
                    carrito.map((element, index) => {
                        return <div key={index} className="">
                            <div><img src={element.image} alt={element.productName} />
                            </div>
                            <div><h2>{element.productName}</h2>
                                <h3>Precio: $ {element.price}</h3>
                                <h3>Cantidad: {element.cantidad}</h3>
                            </div>
                            <div>
                                <button className="btn btn-danger" onClick={() => eliminarItem(element.id)}>Eliminar</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <button className="btn btn-warning" onClick={() => eliminarCarrito()}>Vaciar el carrito</button>
            </div>
            <div>
                <Link to={'/checkout'}><button className="btn btn-success">Ir al checkout</button></Link>
            </div>
        </>)
    }


    return (
        <Page titulo="Carrito" subtitulo="Tus compras" >
            <h1> Nada por aqui...</h1>
            <Link to={'/'}><button className="btn btn-primary">Inicio</button></Link>
            {/* <button className="btn boton-detalle" onClick={handleClick}>Realizar compra</button> */}
        </Page>
    )
}
export default Cart