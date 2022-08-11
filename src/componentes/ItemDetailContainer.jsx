import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { customFetch } from '../assets/customFetch'
import { productos } from '../assets/productos'
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
    const [listProducts, setListProducts] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        customFetch(productos)
            .then(res=> {
                setLoading(true)
                setListProducts(res.find(item=> item.id===1))})
        
    },[])
    

    return (
        <div>
            {!loading && <Spinner animation="border" role="status" className="align-self-center"><span className="visually-hidden  ">Loading...</span>
    </Spinner>}
            {loading && <ItemDetail listProducts={listProducts}/>}
            
        </div>
    )
}
export default ItemDetailContainer