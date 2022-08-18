import { useState, useEffect } from "react";
import { customFetch } from "../../assets/customFetch";
import { productos } from "../../assets/productos";
import ItemList from '../itemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom"
import Page from "../pagina/Page";

const ItemListContainer = ({ greeting }) => {
    const [mostrar, setMostrar] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


    useEffect(() => {
        customFetch(productos)
            .then(res => {
                setLoading(false)
                setMostrar(res)
                
            })
    }, [])


    if (loading) {
        return (<>
            <h2>{greeting}</h2>
            <Spinner animation="border" role="status" className="align-self-center"><span className="visually-hidden  ">Loading...</span>
            </Spinner>
        </>)
    } else {
        return (<Page titulo="Nuetros Productos" subtitulo="Catálogo" >
            <ItemList mostrar={mostrar} />
            </Page >)
    }}

            export default ItemListContainer