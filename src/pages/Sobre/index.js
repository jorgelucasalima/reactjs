
import { Link } from "react-router-dom"
export default function Sobre() {
    return (
        <div>
            <h1>Bem vindo ao SOBRE</h1>
            <br/>
            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link>
        </div>
    )
}