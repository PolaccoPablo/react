import logoPdl from './logoPdl.png'
import CarWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img className='logo' src={logoPdl} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li className="nav-item dropdown">
            <button className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/category/vela">Velas</a></li>
            <li><a className="dropdown-item" href="/category/incienso">Sahumerios</a></li>
            <li><a className="dropdown-item" href="/category/fragancia">Fragancias</a></li>
            <li><a className="dropdown-item" href="/">Todos los productos</a></li>
          </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tips y Secretos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Preguntas frecuentes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contactos</a>
          </li>
        </ul>
      </div>
      <CarWidget/>
    </div>
  </nav>
  <br/>
  </>
  )

}
export default Navbar