import CartWidget from "../cartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import'./navBar.scss'


const Nav = (param) => {

    if (param.type === "header") {
        return (<nav className="d-flex justify-content-evenly" id="header">
            <NavLink className="blanco" to="/">
                <h1>
                    E-commerce con REACT
                </h1>
            </NavLink>

            <NavLink className="blanco" to="/">Listado</NavLink>
            <NavLink className="blanco" to="/categoria/Deporte">Deporte</NavLink>
            <NavLink className="blanco" to="/categoria/tecnologia">Tecnología</NavLink>
            <CartWidget />
        </nav>)
    } else {
        return (
            <nav>
                <Link className="blanco" to="http://">Linkedin</Link>
                <Link className="blanco" to="http://">Github</Link>
                <Link className="blanco" to="http://">Mi whatsapp</Link>
            </nav>
        )
    }
}

export default Nav