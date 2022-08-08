import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.scss'
import { useState } from 'react';
const ItemCount = ({ stock, inicial, onAdd }) => {
    const [resultado, setResultado] = useState(inicial);

    const aumento = () => {
        if (resultado < stock) {
            setResultado(resultado + 1)
        }

    }
    const resto = () => {
        setResultado(resultado - 1)
        if (resultado <= 0) {
            setResultado(0)
            console.log("Ya no hay más")
        }
    }

    const confirmar = ()=>{
        console.log(resultado)
    }

    return (
        <><div className='d-flex flex-column justify-content-center'>
            
            <div className='d-flex flex-row p-2 justify-content-center'>
                <button onClick={resto} className="p-2 text-bg-primary btn ">-</button>
                <p className='px-2 align-self-center'>{resultado}</p>
                <button onClick={aumento} className="p-2 text-bg-primary btn">+</button>
            </div>
            <div>
                <button className=' p-3 btn btn-success' onClick={confirmar}>Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}
export default ItemCount