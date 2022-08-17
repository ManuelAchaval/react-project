import { useState, useEffect } from "react";
import { customFetch } from "../../assets/customFetch";
import { productos } from "../../assets/productos";
import ItemList from '../itemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
    const [mostrar, setMostrar] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoriaId} =useParams()
    

    useEffect(() => {
        customFetch(productos)
            .then(res => {
                setLoading(true)
                setMostrar(res)
                
            })
    },[])



    return (
        <div className="d-flex flex-column">
            <h2>{greeting}</h2>
            {!loading && <Spinner animation="border" role="status" className="align-self-center"><span className="visually-hidden  ">Loading...</span>
            </Spinner>}
            {loading && <ItemList mostrar={mostrar} />}
        </div>
    )
}
export default ItemListContainer