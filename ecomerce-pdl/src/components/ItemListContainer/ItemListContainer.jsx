import { useEffect, useState } from 'react'
//import axios from 'axios'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router"
import { db } from "../../firebase/client"
import { collection, getDocs} from "firebase/firestore"


const ItemListContainer = ({props}) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState ([])

    useEffect (()=>{
        const traerProductos = (categoria) =>{
                // axios.get ("https://raw.githubusercontent.com/PolaccoPablo/archivos/main/productos.json")
                // .then (response=>{ 
                //     categoria ? setProducts(response.data.productosAlaventa.filter(p => p.categoria === categoria)) : setProducts(response.data.productosAlaventa)                  
                // })
                // .catch (error=>{
                //     console.error(error)
                // }) 
                const productosCollection = collection (db, "productos");

                getDocs(productosCollection)
                .then ((snapshot)=> {
                    let datos = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
                    categoria ? setProducts(datos.filter(p => p.categoria === categoria)) : setProducts(datos);
                })
                .catch (error=>{
                         console.error(error)
                     })
        }
        traerProductos(categoryId)
    },[categoryId])
    return(
        <>
        <h1>{props}</h1>
        <ItemList products={products}/>
        </>
    )
}
 export default ItemListContainer