import Header from "./components/Header.js"
import ItemListContainer from "./components/ItemListContainer.js"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {


  return (

    <>
      <Header />
      <ItemListContainer Greeting={"Bienvenidos a The Lamp Stock"} />
    </>

  )
}



export default App

