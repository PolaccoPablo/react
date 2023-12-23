import { createContext, useContext, useState, } from "react";

export const CartContext = createContext()

export const UsecartContext = () => useContext (CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {        
        if (!isInCart(item.id)) {
            setCart(itemsPrev => [...itemsPrev, { ...item, quantity }])
        }
        else {
            console.error('El producto ya fue agregado') /// hacerlo con sweet alert
        }

    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }



    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cantTotalCart = () => {
        let cant = 0 
        cart.forEach((prod) => {cant += prod.quantity})
        return cant
    }

    const precioTotalCart = () => {
        let precio = 0 
        cart.forEach ((prod)=> {precio += prod.quantity * prod.precio})
        return precio
    }

    return (
        < CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cantTotalCart, precioTotalCart }}>
            {children}
        </CartContext.Provider>
    )

}
 
