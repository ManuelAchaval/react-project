import ItemListContainer from "./ItemListContainer";
import Nav from "./Navbar";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer";

function App() {
    return (
        <>
            <Nav type="header" classname="header" />
            <ItemListContainer greeting={"Bienvenido al sitio"}/>
            <ItemDetailContainer/>
            <Footer />
        </>)
}

export default App;