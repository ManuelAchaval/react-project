import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.scss'
import { useState } from 'react';
const ItemCount = ({ stock, inicial }) => {
    const [resultado, setContador] = useState(inicial);
    console.log(resultado)
    const aumento = () => {
        if (resultado < stock) {
            setContador(resultado + 1)
        }

    }
    const resto = () => {
        setContador(resultado - 1)
        if (resultado <= 0) {
            setContador(0)
        }
    }

    return (
        <><div className='d-flex flex-column justify-content-center'>
            <p>ItemNombre</p>
            <div className='d-flex flex-row p-2 justify-content-center'>
                <button onClick={resto} className="p-2 text-bg-primary btn ">-</button>
                <p className='px-2 align-self-center'>{resultado}</p>
                <button onClick={aumento} className="p-2 text-bg-primary btn">+</button>
            </div>
            <div>
                <button className='w-25 p-3 btn btn-success'>Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}
export default ItemCount