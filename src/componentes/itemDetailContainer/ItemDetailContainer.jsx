import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { customFetch } from '../../assets/customFetch'
import { productos } from '../../assets/productos'
import { Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [listProducts, setListProducts] = useState({})
    const [loading, setLoading] = useState(false)
    const {id}=useParams()

    useEffect(() => {

        customFetch(productos)
            .then(res=> {
                console.log(res)
                setLoading(true)
                setListProducts(res.find(item=> item.id==id))
            })
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