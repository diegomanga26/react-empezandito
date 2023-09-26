const url = import.meta.env;
import axios from "axios";

export default function Logincito() {
    const loggear = async (e) => {
        e.preventDefault();
        let correoLog = document.querySelector("#papa").value;
        let contraseñaLog = document.querySelector("#ñame").value;
        const response = await axios.post(`http://${url.VITE_HOST_BACK}:${url.VITE_PORT_BACK}/usuario/login`, {
            correoLog,
            contraseñaLog
            }, 
            {
            headers: {
                'Content-Type': 'application/json'
            },
            });
        if (response.status===200){
            alert("Loggeado correctamente.");
        } else {
            alert("Verifique su usuario o contraseña.");
        };

    }
    return (
        <body className='bg-dark'>
            <div className='container bg-dark' data-bs-theme="dark">
                <div className='row' >
                    <div className='card container mt-3 col-sm-10 col-lg-4'>
                        <div className='card-body'>
                            <form onSubmit={loggear}>
                                <h2>Login:</h2>
                                <hr/>
                                <div className="mb-3">
                                    <label className="form-label">Ingrese su correo:</label>
                                    <input type="email" className="form-control" id='papa' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ingrese su contraseña:</label>
                                    <input type="password" className="form-control" id='ñame' />
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