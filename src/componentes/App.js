import Main from "./Main";
import Nav from "./Navbar";
import Footer from "./Footer";

function App() {
    return (
        <><header id="header">
            <h1>
                E-commerce con REACT
            </h1>
            <Nav type="header"/>
        </header>
        <Main/>
        
        <Footer/>
        </>)
}

export default App;