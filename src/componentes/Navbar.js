import CartWidget from "./CartWidget"
const Nav =(param)=>{
    if (param.type ==="header"){
        return(<nav className="d-flex justify-content-evenly" id="header">
            <h1>
                E-commerce con REACT
            </h1>
            <a href="#listado">Listado</a>
            <a href="http://">Sobre nosotros</a>
            <a href="http://">Contacto</a>
            <div><CartWidget/></div>
        </nav>)
    }else{return(
        <nav>
            <a href="http://">Link a una red social</a>
            <a href="http://">link a mi portfolio</a>
            <a href="http://">Mi whatsapp</a>
        </nav>
    )
    }
}

export default Nav