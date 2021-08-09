import Header from "./components/Header/Header.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {


  return (

    <div className="mx-auto">
      <Header />

      <div className="container-fluid">
        <ItemListContainer saludo={"Bienvenidos a The Lamp Stock"} />
        <ItemDetailContainer />
      </div>

    </div>

  )
}



export default App

