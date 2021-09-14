import Header from "./components/Header.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer.js"
import Formulario from "./components/Formulario.js"
import Cart from "./components/Cart.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CustomProvider from "./components/CartContext"



const App = () => {


  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="mx-auto">

          <Header />
          <div className="container-fluid d-flex flex-column">
            <Switch>
              <Route path="/" component={ItemListContainer} exact />
              <Route path="/categoria/:id" component={ItemListContainer} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/formulario" component={Formulario} />
              <Route path="/cart" component={Cart} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </CustomProvider>


  )
}



export default App

