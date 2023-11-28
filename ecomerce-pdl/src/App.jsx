import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer props={"Productos"}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer props={"Productos"}/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element ={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>

    
  )
}

export default App
