import React from 'react'

export default function CartItem({id, nombre, precio, quantity}) {
  return (

      <tbody>
        <tr>
          <td>{nombre}</td>
          <td>{precio}</td>
          <td>{quantity}</td>
          <td>{precio*quantity}</td>
        </tr>
      </tbody>

  )
}
