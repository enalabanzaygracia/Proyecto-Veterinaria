import { useState } from "react";

import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
//import Paciente from "./components/Paciente";



function App() {

const [Pacientes , setPacientes] = useState




  return (
    <div className="container mx-auto mt-20">




        <div className="mt-12 md:flex ">
        <Formulario />



        <ListadoPacientes/>
        </div>




    </div>
  )
}

export default App;
