const url = import.meta.env;
import axios from "axios";

export default function Registrico() {
    const registrar = async (e) => {
        e.preventDefault();
        let correoReg = document.querySelector("#sancocho").value;
        let contraseñaReg = document.querySelector("#arroz").value;

        const response = await axios.post(`http://${url.VITE_HOST_BACK}:${url.VITE_PORT_BACK}/usuario/registro`, {
            correoReg,
            contraseñaReg
            }, 
            {
            headers: {
                'Content-Type': 'application/json'
            },
            });
        if (response.status===201){
            alert("Usuario ya existente, por favor intente con otro correo");
        } else {
            alert("Usuario registrado");
        };
        
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
            </div>
        </body>
    )
}