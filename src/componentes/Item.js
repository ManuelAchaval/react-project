import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const Item = ({producto}) => {

    

    return (
        <>
            <div className="d-flex flex-column justify-content-evenly item ">
                <h1 className='item__h1'>{producto.productName}</h1>
                <img src={producto.image} alt={producto.productName} />
                
                <ItemCount stock={producto.stock} inicial={0}/>
            </div>
        </>
    )
}
export default Item