import ItemListContainer from "../itemListContainer/ItemListContainer";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";
import {Routes, Route} from "react-router-dom"
import Cart from "../cart/Cart";
import { productos } from "../../assets/productos";
import Checkout from "../checkout/Checkout";
const Main = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
                    <Route path="/categoria" element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
                    <Route path="/categoria/:categoria" element={<ItemListContainer greeting={productos.categoria}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </main>
        </>
    )
}
export default Main