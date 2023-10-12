import React from 'react'

export default function Citas({cita,eliminar} ) {

        return (
          <div className="cita">
            <span id='ID-lista'>{cita.id}</span>
            <p>Mascota: <span>{cita.mascot}</span></p>
            <p>Dueño: <span>{cita.owner}</span></p>
            <p>Fecha: <span>{cita.date}</span></p>
            <p>Hora: <span>{cita.time}</span></p>
            <p>Sintomas: <span>{cita.sintoms}</span></p>
            <button className="button-eliminar u-full-width" onClick={() => eliminar(cita.id)}>Eliminar ×</button>
        </div>
    )
}