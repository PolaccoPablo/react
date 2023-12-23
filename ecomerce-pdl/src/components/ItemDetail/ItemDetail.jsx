import '../Item/Item.css'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../Contex/CartContex'


export default function ItemDetail({ id, categoria, nombre, precio, stock, img }) {
    const navigate = useNavigate()
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }
        addItem(item, quantity)
        navigate('/cart')
    }

    return (
        <article className='card CardItemDetail'>
            <header className='Hader'>
                <h2 className='ItemHeader'>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='imgprod' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
                <footer className='ItemFooter'>
                    <ItemCount Initial={1} stock={stock} onAdd={(quantity) => handleOnAdd(quantity)} />
                </footer>
            </section>
        </article>
    )
}
