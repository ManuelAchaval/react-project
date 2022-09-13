import { useState, useEffect } from "react";
import ItemList from '../itemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom"
import Page from "../pagina/Page";
import { db } from "../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";




const ItemListContainer = ({ greeting }) => {
    const [mostrar, setMostrar] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


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
                setMostrar(product)
                setLoading(false)
            })


        if (categoria === "tecnologia") {
            const q = query(collection(db, "productos"), where("categoria", "==", "tecnologia"));
            getDocs(q).then((snapshot) => { setMostrar(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))) })
        } if (categoria === "Deporte") {
            const q = query(collection(db, "productos"), where("categoria", "==", "Deporte"));
            getDocs(q).then((snapshot) => { setMostrar(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))) })
        }
    }, [categoria])


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
    }
}

export default ItemListContainer