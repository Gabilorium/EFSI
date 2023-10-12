import './App.css';
import ListadoCitas from "./components/ListadoCitas.js";
import Formulario from "./components/Formulario.js";
import Titulo from "./components/Titulo.js";
import Subtitulo from './components/Subtitulo.js';
import React, { useState } from 'react';

function App() {

  const array = [
    {id:1,mascot:'Octavio',owner:'Makishi',date:'2021-08-05',time:'08:20',sintoms:'Esta durisimo (Libre interpretacion)'}
  ]
  //console.log(listadoCitas[0])
  const [listaCitas, setListaCitas] = useState(array);

  const agregarCita = e => {
    e.preventDefault();
    setListaCitas(
      [
        ...listaCitas,
        {
          id :      e.target.id.value,
          mascot:   e.target.mascota.value,
          owner:    e.target.duenio.value,
          date:     e.target.fecha.value,
          time:     e.target.hora.value,
          sintoms:  e.target.sintomas.value
        }
      ]
  );
  }
  function eliminarCita(idCita){
    const updatedLista = listaCitas.filter(cita => cita.id !== idCita);
    setListaCitas(updatedLista);
  };

  return (
    <div id='root'>
       <Titulo titulo="ADMINISTRADOR DE PACIENTES"/>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo subtitulo="Crear mi Cita"/>
          <form onSubmit={(e) => agregarCita(e)}>
            <Formulario listaCitas={listaCitas} agregarCita={agregarCita}/>
          </form>            
          </div>
          <div className="one-half column">
            <Subtitulo subtitulo="Administra tus citas"/>
            <div>
              <ListadoCitas listadoCitas={listaCitas} eliminar={eliminarCita}/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;