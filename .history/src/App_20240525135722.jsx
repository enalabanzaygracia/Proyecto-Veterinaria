import { useState } from "react";

import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
//import Paciente from "./components/Paciente";


// props  -> propiedades para pasar variables de otros componentes 
function App() {

const [Pacientes , setPacientes] = useState([]);




  return (
    <div className="container mx-auto mt-20">




        <div className="mt-12 md:flex ">
        <Formulario 
        setPacientes = {setPacientes}
        p


        />



        <ListadoPacientes/>
        </div>




    </div>
  )
}

export default App;
