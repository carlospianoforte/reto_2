import React from 'react';
import '../App.scss';

const Tarjetas = ({ citas }) => {
  return (
    <div className="lista-citas">
      <h2>Lista de Citas</h2>
      {citas.map((cita, index) => (
        <div key={index} className="cita-card">
          <h3>{cita.nombreMascota}</h3>
          <p>Edad: {cita.edad}</p>
          <p>Género: {cita.genero}</p>
          <p>Día de la Cita: {cita.diaCita}</p>
          <p>Dueño: {cita.nombreDuenio}</p>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;
