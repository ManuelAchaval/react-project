import "./itemDetail.scss"
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({ listProducts }) => {
    
    return (
        <div className="cont">
            <h1 className="cont_cosas">{listProducts.productName}</h1>
            <img className="w-25" src={listProducts.image} alt={listProducts.productName} />
            <h2>Precio: USD${listProducts.price}</h2>
            <h3>{listProducts.category}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est accusantium error amet iusto vel iste, eum id soluta laborum doloribus aliquid qui ipsam laudantium.</p>
            <ItemCount stock={listProducts.stock} inicial={0} />
        </div>
    )
}
export default ItemDetail

