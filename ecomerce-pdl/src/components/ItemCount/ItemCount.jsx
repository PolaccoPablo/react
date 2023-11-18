import { useState } from 'react'

const ItemCount = ({Initial,stock,onAdd }) => {
    const [quantity, setQuantity] = useState(Initial)

    const increment = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(quantity)

    }

    const decrement = () => {
        quantity > Initial ? setQuantity(quantity - 1) : setQuantity(quantity)

    }
    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'> {quantity}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )


}
export default ItemCount