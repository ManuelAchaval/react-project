import Nav from "./nav/Navbar";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";

function App() {
    return (
        <BrowserRouter>
            <Nav type="header" classname="header" />
            <Main/>
            <Footer />
        </BrowserRouter>
        )
}

export default App;