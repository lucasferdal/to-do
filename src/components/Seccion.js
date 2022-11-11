import React, { useRef, useState } from 'react';

function Seccion() {
    
    let [tablita, setTablita] = useState({
        descripcion: '',
        hora: '',
        fecha: '',
        categoria: ''
    })
    let tBody = useRef('');

    
    
    
    
    const tata = (e) => {
        e.preventDefault()
    }

    return (
        <tbody id='tBody' ref={tBody}>
            <tr>
                <td>1</td>
                <td>{tablita.descripcion}</td>
                <td>{tablita.categoria}</td>
                <td>{tablita.hora} {tablita.fecha}</td>
            </tr>
        </tbody>
    )
}

export default Seccion;