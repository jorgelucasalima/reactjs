
import { Link } from "react-router-dom"
export default function Erro() {
    return (
        <div>
            <h1>Uhmmm, parece que essa pagina não existe</h1>
            <br/>

            <span>Você pode está procurando..</span><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
        </div>
    )
}