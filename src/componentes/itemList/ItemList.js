import Item from '../item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemList.scss'
import {useParams} from 'react-router-dom'
const ItemList = ({ mostrar }) => {

    const {categoriaId} =useParams()


    return (
        <div id="Listado" className='items' >

            <ul className="d-flex flex-wrap ">
                {mostrar.map(producto=><Item key={producto.id} categoriaId={producto.categoria}producto={producto}/>)}
            </ul>
        </div>
    )
}
export default ItemList