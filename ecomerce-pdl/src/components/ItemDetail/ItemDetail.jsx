import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({id, categoria, nombre, precio, stock, img}) {
  return (
    <article className='CardItem'>
    <header className='Hader'>
    <h2 className='ItemHeader'>{nombre}</h2>
    </header>
    <picture>
        <img src={img} alt={nombre} className='ItemImg' />
    </picture>
    <section>
        <p className='Info'>
            Precio: ${precio}
        </p>
        <p className='Info'>
            Stock disponible: {stock}
        </p>
        <footer className='ItemFooter'>
            <ItemCount Initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada ", quantity)} />
        </footer>
    </section>
</article>
  )
}
