import ItemListContainer from "./ItemListContainer";
import Nav from "./Navbar";
import Footer from "./Footer";


function App() {
    return (
        <>
            <Nav type="header" classname="header" />
            <ItemListContainer greeting={"Bienvenido al sitio"}/>
            <Footer />
        </>)
}

export default App;