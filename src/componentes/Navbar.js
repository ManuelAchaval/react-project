const Nav =(param)=>{
    if (param.type =="header"){
        return(<nav class="d-flex justify-content-evenly">
            <a href="http://">Link de nav</a>
            <a href="http://">Link de nav1</a>
            <a href="http://">Link de nav2</a>
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