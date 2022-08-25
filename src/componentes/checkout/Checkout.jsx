import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contexto } from '../CustomProvider'


const Checkout = () => {
    const { carrito, getItemPrice } = useContext(contexto)
    const carlos = useNavigate()
    const { cliente, setCliente } = useState({
        name: '',
        lastname: '',
        email: '',
        address: '',
    })

    const handlerChangeInput = (e) => {
        // setCliente({...cliente,
        //     [e.target.name]: e.target.value,
        // })
        console.log(e.target)
        console.log(cliente)
    }

    const handlerSubmit = () => {

    }

    if (carrito.length === 0) {
        setTimeout(() => {
            carlos('/')
        }, 3000)
        return (<div>
            <h1>Todavia no compraste nada...</h1>
        </div>)
    }
    const confirmaCompra = (e) => {
        e.preventDefault()
        const orden ={
            items: carrito,
            price: getItemPrice(),
        }
        console.log(orden)
    }
    return (
        <div>
            <h1>Checkout</h1>
            <h2>Completa tus datos</h2>
            <div className=''>
                <form className='d-flex flex-column w-30 p-3 justify-content-end' >
                    <input
                        placeholder='Nombre'
                        name="name"

                        onChange={handlerChangeInput} />
                    <input onChange={handlerChangeInput} placeholder='Apellido' name='lastname' />
                    <input onChange={handlerChangeInput} placeholder='Direccion' name='address' />
                    <input onChange={handlerChangeInput} placeholder='Email' name='email' />
                </form>
                <button className='btn btn-success' onClick={confirmaCompra} type="submit">Confirmar compra</button>
            <hr />

            </div>
        </div>
    )
}
export default Checkout