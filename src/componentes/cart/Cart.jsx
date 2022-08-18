import Page from "../pagina/Page"
import '../item/Item.scss'
const Cart = () => {
    const handleClick=(e)=>{
        console.log(e)
        console.log(e.target)
    } 
    const handleChange =(e) =>{
        console.log(e)
    }
    return (
        <Page titulo="Carrito" subtitulo="Tus compras" >
            <p> aca van las compras</p>
            <button  className="btn boton-detalle" onClick={handleClick}>Realizar compra</button>
        </Page>
    )
}
export default Cart