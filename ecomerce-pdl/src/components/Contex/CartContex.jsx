import {createContext, useState, } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    conts [cart, setCart] = useState([])

const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
        setcart (itemsPrev => [...itemsPrev, {...item, quantity}])
    }
    else {
        console.error ('El producto ya fue agregado') /// hacerlo con sweet alert
    }

}

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)

}

const clearCart = () => {
    setCart ([])
}



const isInCart = (itemId) => {
    return cart.some (prod => prod.id === itemId)
}

return (
    < CartContext.Provider value ={{cart, addItem, removeItem, clearCart }}>
        {children  }
    </CartContext.Provider>
)

}

