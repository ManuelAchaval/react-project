import Nav from "./nav/Navbar";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import CustomProvider from "./CustomProvider";


function App() {
    return (
        <BrowserRouter>
            <CustomProvider>
                <Nav type="header" classname="header" />
                <Main />
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App;