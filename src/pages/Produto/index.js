import {useParams} from 'react-router-dom'

export default function Produto() {

    const {id} = useParams()

    return (
        <div>
            <h1>Produto</h1><br/>
            <span>Produto selecionado: {id}</span><br/>
        
        </div>
    )
}