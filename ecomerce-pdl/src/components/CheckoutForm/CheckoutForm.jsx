import React, { useState } from 'react'

function CheckoutForm({ onConfirm }) {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = { nombre, telefono, mail }
        console.log(userData)
        onConfirm(userData)
    }
    return (
        <div className='card'>
            <form onSubmit={handleConfirm} className='Form'>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={({ target }) => setNombre(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input
                        type="number"
                        className="form-control"
                        id="telefono"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={({ target }) => setTelefono(target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder='Email'
                        aria-describedby="emailHelp"
                        value={mail}
                        onChange={({ target }) => setMail(target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        El mail es utilizado únicamente para enviar a futuro su orden.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    )
}
export default CheckoutForm
