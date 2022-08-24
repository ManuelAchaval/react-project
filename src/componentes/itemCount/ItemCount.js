import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.scss'
import { useState } from 'react';
const ItemCount = ({ stock, inicial, onAdd }) => {
    const [contador, setContador] = useState(inicial);

    const aumento = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }

    }
    const resto = () => {
        setContador(contador - 1)
        if (contador <= 0) {
            setContador(0)
            console.log("Ya no hay más")
        }
    }

const confirmar= ()=>{
    onAdd(contador)
}


    return (
        <><div className='d-flex flex-column justify-content-center'>
            
            <div className='d-flex flex-row p-2 justify-content-center'>
                <button onClick={resto} className="p-2 text-bg-primary btn ">-</button>
                <p className='px-2 align-self-center'>{contador}</p>
                <button onClick={aumento} className="p-2 text-bg-primary btn">+</button>
            </div>
            <div>
                <button className=' p-3 m-3 btn btn-success' onClick={confirmar} >Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}
export default ItemCount