import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'
import './Item.scss'
import { Link } from "react-router-dom";

const Item = ({ producto }) => {

    const {id} =useParams()

    return (
        <>
            <div className="d-flex flex-column justify-content-evenly item ">
                <h1 className='item__h1'>{producto.productName}</h1>
                <img src={producto.image} alt={producto.productName} />
                <Link to={`/detalle/${producto.id}`} className='p-3 m-3 btn boton-detalle'>Ver detalle</Link>
            </div>
        </>
    )
}
export default Item