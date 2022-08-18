import Item from '../item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemList.scss'

const ItemList = ({ mostrar }) => {


    return (
        <div id="Listado" className='items' >

            <ul className="d-flex flex-wrap ">
                {mostrar.map(producto=><Item key={producto.id} producto={producto}/>)}
            </ul>
        </div>
    )
}
export default ItemList