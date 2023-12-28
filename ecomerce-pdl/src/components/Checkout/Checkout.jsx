import React, { useState } from 'react'
import { db } from "../../firebase/client"
import { Timestamp, addDoc, collection, documentId, getDocs, writeBatch, query, where} from "firebase/firestore"
import { UsecartContext } from '../Contex/CartContex'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

function Checkout() {
    const[loading, setLoading] = useState(false)
    const[orderId, setOrederId] = useState('')

    const { cart, clearCart, precioTotalCart } = UsecartContext()

    const createOrder = async ({nombre, telefono, mail}) => {
        setLoading(true)
        try{
            const objOrder ={
                buyer: {nombre, telefono, mail},
                items: cart,
                total: precioTotalCart(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            console.log(ids)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const {docs} = productsAddedFromFirestore

            docs.forEach( doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrederId(orderAdded.id)
                clearCart()
            }else{
                alert("Hay productos que estan fuera de stock")
            }

        }catch(ex){
            console.log(ex)
        }
        finally{ setLoading(false)}
    }
    if (loading){
        return <div className='card'><h2>Se está generando su orden...</h2></div>
    }
    if(orderId){
        return <div className='card'><h2>El id de su orden es: {orderId}</h2></div>
    }
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

export default Checkout
