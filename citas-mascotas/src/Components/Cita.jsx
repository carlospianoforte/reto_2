import  {useState} from "react";
import PropTypes from "prop-types";
import "../App.scss";

const Cita = ({ agregarCita }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [diaCita, setDiaCita] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [errores, setErrores] = useState({});
  const fechaActual = new Date().toISOString().slice(0, 10);

  const validarCampos = () => {
    const nuevosErrores = {};

    if (nombreMascota === "") {
      nuevosErrores.nombreMascota = "El nombre de la mascota es obligatorio";
    }

    if (edad === "") {
      nuevosErrores.edad = "La edad es obligatoria";
    }

    if (genero === "") {
      nuevosErrores.genero = "El género es obligatorio";
    }

    if (diaCita === "") {
      nuevosErrores.diaCita = "El día de la cita es obligatorio";
    }

    if (nombreDuenio === "") {
      nuevosErrores.nombreDuenio = "El nombre del dueño es obligatorio";
    }

    setErrores(nuevosErrores);

    console.log(`esto  retorne el ${Object.keys(nuevosErrores).length}`);
    return Object.keys(nuevosErrores).length === 0;
  };

  const limpiarCampos = () => {
    setNombreMascota("");
    setEdad("");
    setGenero("");
    setDiaCita("");
    setNombreDuenio("");
    setErrores({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarCampos()) {
      const nuevaCita = {
        nombreMascota,
        edad,
        genero,
        diaCita,
        nombreDuenio,
      };

      agregarCita(nuevaCita);
      limpiarCampos();
    }
  };

  return (
    <div className="cita-form">
      <h2>Formulario de Cita de Mascotas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Mascota</label>
          <input
            type="text"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
          {errores.nombreMascota && (
            <p className="error">{errores.nombreMascota}</p>
          )}
        </div>
        <div>
          <label>Edad</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          {errores.edad && <p className="error">{errores.edad}</p>}
        </div>
        <div>
          <label>Género</label>
          <select name="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Seleccione el género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          {errores.genero && <p className="error">{errores.genero}</p>}
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            value={diaCita}
            min={fechaActual}
            onChange={(e) => setDiaCita(e.target.value)}
          />
          {errores.diaCita && <p className="error">{errores.diaCita}</p>}
        </div>
        <div>
          <label>Nombre del Dueño</label>
          <input
            type="text"
            value={nombreDuenio}
            onChange={(e) => setNombreDuenio(e.target.value)}
          />
          {errores.nombreDuenio && (
            <p className="error">{errores.nombreDuenio}</p>
          )}
        </div>
        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
};
Cita.propTypes = {
  agregarCita: PropTypes.func.isRequired, 
};
export default Cita;
