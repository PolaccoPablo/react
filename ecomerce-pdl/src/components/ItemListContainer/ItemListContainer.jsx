import { useState, useEffect } from "react"
import axios from 'axios'
import ItemList from "../../ItemList/ItemList"
const ItemListContainer = ({props}) => {


    const [products, setProducts] = useState ([])

    useEffect (()=>{
        axios.get ("https://raw.githubusercontent.com/PolaccoPablo/archivos/main/productos.json")
        .then (response=>{
            setProducts(response.data.productosAlaventa)  
        })
        .catch (error=>{
            console.error(error)
        })
    },[])


    return(
        <>
        <h1>{props}</h1>
        <ItemList products={products}/>
        </>
    )
}
 export default ItemListContainer