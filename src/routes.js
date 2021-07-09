//import config react
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produto from './pages/Produto'
import Erro from './pages/Erro'
//import components
import Header from './components/Header'



const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/produto/:id" component={Produto} />
                <Route exact path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes