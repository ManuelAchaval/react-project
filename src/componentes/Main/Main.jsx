import ItemListContainer from "../itemListContainer/ItemListContainer";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";
import {Routes, Route} from "react-router-dom"
import Cart from "../cart/Cart";
const Main = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
                    <Route path="/categoria" element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
                    <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
                </Routes>
            </main>
        </>
    )
}
export default Main