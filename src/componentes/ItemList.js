import Item from "./Item";

import 'bootstrap/dist/css/bootstrap.min.css'


const ItemList = ({ mostrar }) => {




    return (
        <div id="Listado" >

            <ul className="d-flex flex-wrap ">
                {mostrar.map(producto=><Item key={producto.id} producto={producto}/>)}
            </ul>
        </div>
    )
}
export default ItemList