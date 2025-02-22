import { useState, useEffect } from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Paciente from "./components/Paciente";

//Props -> propiedades - para pasar variables o funciones de otros componentes
//Ejemplo - <Header nombrePropo={ datos o funciones} />
function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

/*
  useEffect(() => {
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])
*/
useEffect(() => {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
  pacientesLS?.length > 0 && setPacientes(pacientesLS);
  }, [pacientes]);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  const eliminarPaciente = (id) => {
    //console.log('Eliminando paciente', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
  <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex"> 
    {/* MEDIAQUERYYYYY */}
    <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
    />
    <ListadoPacientes
    pacientes={pacientes}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
    
    />
    </div>
  </div>
  )
}

export default App