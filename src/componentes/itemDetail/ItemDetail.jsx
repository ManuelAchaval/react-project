import "./itemDetail.scss"
import ItemCount from "../itemCount/ItemCount"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../CustomProvider"


const ItemDetail = ({ listProducts }) => {
    const [seAgrego, setSeAgrego]= useState(false)
    const {agregarCarrito}=useContext(contexto)

    const onAdd=(contador)=>{
        setSeAgrego(true)
        listProducts.cantidad= contador

        agregarCarrito(listProducts)
        
    }
    
    return (
        <div className="cont">
            <h1 className="cont_cosas">{listProducts.productName}</h1>
            <img className="w-25" src={listProducts.image} alt={listProducts.productName} />
            <h2>Precio: USD${listProducts.price}</h2>
            <h3>{listProducts.category}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est accusantium error amet iusto vel iste, eum id soluta laborum doloribus aliquid qui ipsam laudantium.</p>
            {
                seAgrego ?
                <NavLink to="/cart">
                    <button className="btn btn-primary">Ir al carrito</button>
                </NavLink>
                :
                <ItemCount stock={listProducts.stock} inicial={0} onAdd={onAdd} />
            }
            
        </div>
    )
}
export default ItemDetail

