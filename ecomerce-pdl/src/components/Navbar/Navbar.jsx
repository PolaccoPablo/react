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
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
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
    </div>
  </nav>
  <CarWidget/>
  </>
  )

}
export default Navbar