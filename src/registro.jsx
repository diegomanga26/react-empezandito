//import React from 'react';

export default function Registrico() {
    const registrar = async (e) => {
        e.preventDefault();
        let correo = document.querySelector("#sancocho").value;
        let contraseña = document.querySelector("#arroz").value;
        let registrarse = { correo, contraseña };
        console.log(registrarse);

        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registrarse)
        };
        let respuesta = await fetch("http://deboponerlaurlaqui", request);
        const respuestaJson = await respuesta.json();
        console.log(respuestaJson);
    }
    return (
        <body className='bg-dark'>
            <div className='container bg-dark' data-bs-theme="dark">
                <div className='row' >
                    <div className='card container mt-3 col-sm-10 col-lg-4'>
                        <div className='card-body'>
                            <form onSubmit={registrar}>
                                <h2>Registro:</h2>
                                <hr/>
                                <div className="mb-3">
                                    <label className="form-label">Ingrese su correo:</label>
                                    <input type="email" className="form-control" id='sancocho' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ingrese su contraseña:</label>
                                    <input type="password" className="form-control" id='arroz' />
                                </div>
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row' >
                    <div className='card container mt-3 col-sm-10 col-lg-4'>
                        <div className='card-body'>
                            <form onSubmit={registrar}>
                                <h2>Login:</h2>
                                <hr/>
                                <div className="mb-3">
                                    <label className="form-label">Ingrese su correo:</label>
                                    <input type="email" className="form-control" id='sancocho' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ingrese su contraseña:</label>
                                    <input type="password" className="form-control" id='arroz' />
                                </div>
                                <button type="submit" className="btn btn-primary">Loggear</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}