import Header from "./components/Header/Header.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {


  return (

    <>
      <Header />

      <div className="d-flex justify-content-center my-5">
        <ItemListContainer saludo={"Bienvenidos a The Lamp Stock"} />

      </div>

    </>

  )
}



export default App

