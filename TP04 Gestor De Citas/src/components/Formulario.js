import React, { useState } from 'react';



export default function Formulario() {

  const CrearCita = (e) =>{

  }

  const [cita, setCita] = useState(
    {
      id: 0,
      mascota:'',
      duenio: '',
      fecha: '',
      hora:'', 
      sintomas: ''
    }
  );

  const [id, setId] = useState(1);

  const incrementId = () => {
    setId((prevId) => prevId + 1);
  };




  const listadoFormulario = [
  {id:1,type:'hidden',name:'id'},
  {id:2,titulo:'Nombre mascota',type:'text',name:'mascota',placeholder:'Nombre mascota'},
  {id:3,titulo:'Nombre dueño',type:'text',name:'duenio',placeholder:'Nombre dueño de la mascota'},
  {id:4,titulo:'Fecha',type:'date',name:'fecha',placeholder:null},
  {id:5,titulo:'Hora',type:'time',name:'hora',placeholder:null},
  {id:6,titulo:'Sintomas',type:'textarea',name:'sintomas',placeholder:null},
  ];
  return (
    <>

        {listadoFormulario.map((form)=>
            <div key={form.id}>
                <label>{form.titulo}</label>
                {form.type === 'hidden' ? (
                <input type={form.type} name={form.name} value={id} className="u-full-width" readOnly />
                ) : (
                <input type={form.type} name={form.name} className="u-full-width" placeholder={form.placeholder} />
              )}
            </div>            
        )}
        <button type="submit" className="u-full-width button-primary" onClick={incrementId}>Agregar Cita</button>
    </>
  )
}

