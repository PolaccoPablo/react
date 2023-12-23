import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './components/Contex/CartContex'
import CartView from './components/CartView/CartView'

function App() {
  return (
  
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer props={"Productos"}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer props={"Productos por categoria"}/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element = {<CartView/>}/>
            <Route path='*' element ={<h1>404 Not Found</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>

    
  )
}

export default App
