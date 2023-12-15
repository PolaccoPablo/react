import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { db } from "../../firebase/client"
import { collection, doc, getDoc, getDocs, query, where, limit, addDoc, updateDoc } from "firebase/firestore"

export default function ItemDetailContainer() {
    const {itemId} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProductById = async (itemId) => {
            // axios.get("https://raw.githubusercontent.com/PolaccoPablo/archivos/main/productos.json")
            //     .then(response => {
            //         console.log(response.data.productosAlaventa.filter(p => p.id === parseInt(productId)))
            //         setProduct(response.data.productosAlaventa.find(p => p.id === parseInt(productId)))
            //     })
            //     .catch(error => {
            //         console.error(error)
            //     })
// VER QUE TODAVIA TIRA ERROR...
            
                try {
                    const productDoc = await getDoc(doc(db, "productos", itemId));
                    if (productDoc.exists()) {

                        setProduct({ id: productDoc.id, ...productDoc.data() });
                    } else {
                        console.log("No existe el producto!");
                    }
                } catch (error) {
                    console.error("Error al buscar el documento:", error);
                }
            
        }
        getProductById(itemId)
    }, [])
    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

