import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const Item = ({producto}) => {

    return (
        <>
            <div className="d-flex flex-column ">
                <h1>{producto.productName}</h1>
                <img src={producto.image} alt={producto.productName} />
                <h3>descripcion</h3>
                <h3>{producto.category}</h3>
                <h3>U$D {producto.price}</h3>
                <ItemCount stock={producto.stock} inicial={0}/>
            </div>
        </>
    )
}
export default Item