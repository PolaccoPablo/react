import { UsecartContext } from '../Contex/CartContex'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

export default function CartView() {
    const { cart, clearCart, cantTotalCart, precioTotalCart } = UsecartContext()
    console.log(cantTotalCart())
    if (cantTotalCart() === 0) {
        return (
        <div className='card'>
            <h1>No hay items en el carrito</h1>
            <Link to='/' className='Option'>productos</Link>
        </div>
    )}



    return (
<div className='card'>
    {cart.map(p => <CartItem key={p.id} {...p}/>)}
        <h3>Total: ${precioTotalCart()}</h3>
        <footer>
        <button className="btn btn-danger" onClick={() => clearCart()} > Limpiar carrito</button>
        <Link to='/'><button className='btn btn-secondary'>Seguir Comprando</button></Link>
        <Link to='/checkout'><button className='btn btn-success'>Checkout</button></Link>
        </footer>

</div>



  )
}
