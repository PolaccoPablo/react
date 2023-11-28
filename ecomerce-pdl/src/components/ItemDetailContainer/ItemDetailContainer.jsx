import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'


export default function ItemDetailContainer() {
    const {itemId} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProductById = (productId) => {
            axios.get("https://raw.githubusercontent.com/PolaccoPablo/archivos/main/productos.json")
                .then(response => {
                    console.log(response.data.productosAlaventa.filter(p => p.id === parseInt(productId)))
                    setProduct(response.data.productosAlaventa.find(p => p.id === parseInt(productId)))
                })
                .catch(error => {
                    console.error(error)
                })
        }
        getProductById(itemId)
    }, [])
    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

