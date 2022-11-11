import React, { useRef, useState } from 'react';
import './App.css';
import Seccion from './components/Seccion';

function App() {
    let [valor, setValor] = useState('')
    let [tablita, setTablita] = useState('')

    let jamon = () => {
        let igual = [...valor]
        
    }

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

                <input type="text" id='descripcion' className='m-3' name='descripcion' />
                <label htmlFor="descripcion">Descripcion </label>
                <br />
                <input type="text" id='hora' className='m-3' name='hora' onInput={jamon()}/>
                <label htmlFor="hora">Hora</label>
                <br />
                <input type="text" id='fecha' className='m-3' name='fecha' />
                <label htmlFor="fecha">Fecha</label>
                <br />
                <input type="text" id='categoria' className='m-3' name='categoria' />
                <label htmlFor="categoria">Categoria</label>
                <br />
                <button type='submit' className='btn btn-secondary m-3' >Enviar</button>

            </div>
            <div className=''>
                <table className='table text-center border border-secondary'>
                    <thead>
                        <tr>
                            <th scope='col' className='border border-secondary'>id</th>
                            <th scope='col' className='border border-secondary'>descripcion</th>
                            <th scope='col' className='border border-secondary'>categoria</th>
                            <th scope='col' className='border border-secondary'>fecha y hora</th>
                        </tr>
                    </thead>

                    <Seccion />

                </table>
            </div>
        </div>
    );
}

export default App;