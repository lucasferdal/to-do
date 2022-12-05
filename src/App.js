import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Seccion from './components/Seccion';


function App() {
    let [tablita, setTablita] = useState({
        descripcion: '',
        hora: '',
        fecha: '',
        categoria: ''
    })

    let descripcion = useRef(undefined)
    let hora = useRef(undefined)
    let fecha = useRef(undefined)
    let categoria = useRef(undefined)

    let boton = useRef()

    const agua = (event) => {
        setTablita({
            ...tablita,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="App container" >
            <h1>To Do App</h1>
            <h2>Escribe tus tareas a continuacion: </h2>
            <hr />
            <div>

                <input type="text" id='descripcion' className='m-3' name='descripcion' onInput={agua} ref={descripcion} />
                <label htmlFor="descripcion">Descripcion </label>
                <br />
                <input type="text" id='hora' className='m-3' name='hora' onInput={agua} ref={hora} />
                <label htmlFor="hora" >Hora</label>
                <br />
                <input type="text" id='fecha' className='m-3' name='fecha' onInput={agua} ref={fecha} />
                <label htmlFor="fecha">Fecha</label>
                <br />
                <input type="text" id='categoria' className='m-3' name='categoria' onInput={agua} ref={categoria} />
                <label htmlFor="categoria">Categoria</label>
                <br />

            </div>
            <div className=''>
                <div>
                    <Seccion descripcion={tablita.descripcion} hora={tablita.hora} fecha={tablita.fecha} categoria={tablita.categoria} boton={boton} />
                </div>
            </div>
        </div>
    );
}

export default App;