import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'

import { Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [listProducts, setListProducts] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const consulta = getDocs(productosCollection)
        consulta
            .then(snapshot => {
                const product = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setListProducts(product.find(item => item.id === id))
                setLoading(true)

            })
        
    }, [id])


    return (
        <div>
            {!loading && <Spinner animation="border" role="status" className="align-self-center"><span className="visually-hidden  ">Loading...</span>
            </Spinner>}
            {loading && <ItemDetail listProducts={listProducts} />}

        </div>
    )
}
export default ItemDetailContainer