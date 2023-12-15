import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Item({ id, nombre, precio, img, stock }) {
    return (
        <article className='Card CardItem'>
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
                    <button className='Option'><Link to={`/item/${id}`}>Ver detalle</Link></button>
                </footer>
            </section>
        </article>
    )
}
