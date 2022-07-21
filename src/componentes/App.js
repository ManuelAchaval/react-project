import Main from "./Main";
import Footer from "./Footer";

function App() {
    return (
        <><header id="header">
            <h1>
                Hola mundo, esto es REACT
            </h1>
            <nav id="nav"><ul>
                <li>Inicio</li>
                <li>contacto</li>
            </ul></nav>
        </header>
        <Main/>
        <Footer/>
        </>)
}

export default App;