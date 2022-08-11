const ItemDetail = ({ listProducts }) => {

    return (
        <div>
            <h1>{listProducts.productName}</h1>
            <h2>Precio: U$D{listProducts.price}</h2>
            <h3>{listProducts.category}</h3>
        </div>
    )
}
export default ItemDetail