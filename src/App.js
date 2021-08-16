import Header from "./components/Header/Header.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import Cart from "./components/Cart/Cart.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"



const App = () => {


  return (

    <BrowserRouter>
      <div className="mx-auto">

        <Header />
        <div className="container-fluid d-flex flex-column">
          <Switch>
            <Route path="/" component={ItemListContainer} exact />
            <Route path="/cart" component={Cart} />
            <Route path="/categoria/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />

          </Switch>
        </div>
      </div>
    </BrowserRouter>


  )
}



export default App

