import React, { useEffect, useRef, useState, useMemo } from 'react';

const tabla = []

function Seccion({ descripcion, hora, fecha, categoria }) {

    let tBody = useRef('');

    let [setear, setSetear] = useState(0)
    let [tablas, setTablas] = useState(tabla)

    const submit = (e) => {
        e.preventDefault()

        if (descripcion !== '' && hora !== '' && fecha !== '' && categoria !== '') {
            let valores = {
                descripcion: descripcion,
                hora: hora,
                fecha: fecha,
                categoria: categoria
            }
            tabla.push(valores)

            console.log(tabla)
            setSetear(!setear)
        } else {
            console.log('sapent')
        }
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <button className='btn btn-danger ms-3 mb-3' >Enviar</button>

                    <table className='table text-center border border-secondary'>
                        <thead>
                            <tr>
                                <th scope='col' className='border border-secondary'>id</th>
                                <th scope='col' className='border border-secondary'>descripcion</th>
                                <th scope='col' className='border border-secondary'>categoria</th>
                                <th scope='col' className='border border-secondary'>fecha y hora</th>
                            </tr>
                        </thead>

                        <tbody id='tBody' ref={tBody}>
                            {tabla.map((e, i) => {
                                return (
                                    <tr key={i} >
                                        <td>{i}</td>
                                        <td>{e.descripcion}</td>
                                        <td>{e.categoria}</td>
                                        <td>{e.hora} {e.fecha}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </form>
        </>
    )
}

export default Seccion;