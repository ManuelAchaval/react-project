import './Page.scss'
const Page = (props) => {
    return (
        <div>
            <header className="page_header">
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
            </header>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Page