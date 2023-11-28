import React, { useState, useEffect } from "react"
import axios from 'axios'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router"
const ItemListContainer = ({props}) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState ([])

    useEffect (()=>{
        const traerProductos = (categoria) =>{
                axios.get ("https://raw.githubusercontent.com/PolaccoPablo/archivos/main/productos.json")
                .then (response=>{ 
                    categoria ? setProducts(response.data.productosAlaventa.filter(p => p.categoria === categoria)) : setProducts(response.data.productosAlaventa)                  
                })
                .catch (error=>{
                    console.error(error)
                })  
        }
        traerProductos(categoryId)
    },[products, categoryId])


    return(
        <>
        <h1>{props}</h1>
        <ItemList products={products}/>
        </>
    )
}
 export default ItemListContainer