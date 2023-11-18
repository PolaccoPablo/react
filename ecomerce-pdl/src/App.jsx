import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <ItemListContainer props={"Productos"}/>
      <ItemCount Initial = {1} stock = {10} onAdd={(quantity) => console.log("cantidad agregada ", quantity)}/>
    </>
  )
}

export default App
