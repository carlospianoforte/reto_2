import { useState } from 'react'
import Cita from './Components/Cita'
import Tarjetas from './Components/Tarjetas'
import Footer from './Components/Footer'
import './App.scss';


function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div className="app">
      <Cita agregarCita={agregarCita} />
      <Tarjetas citas={citas} />
      <Footer citas={citas} />
    </div>
  );
}
export default App
