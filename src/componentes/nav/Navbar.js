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
            <nav className="d-flex justify-content-around p-3">
                <Link className="blanco" to="https://www.linkedin.com/in/manuel-ach%C3%A1val-9a2717158/">Linkedin</Link>
                <Link className="blanco" to="https://github.com/ManuelAchaval">Github</Link>
                <Link className="blanco" to="http://">Mi whatsapp</Link>
            </nav>
        )
    }
}

export default Nav