import { useState, useEffect } from 'react';


/*  const [cliente ,setcliente] = useState ({}); 
otro ejemplo 
= const [cliente ,setcliente] = useState (0); 

cliente = al valor del estado o variable
setcliente = funcion o modificador que modifica lo que esta en la variable
useState ({})  = valor inicial vacio 
useState ([]); para llamar un arreglo para que llame una varible 
useState (0); cuando incicia el valor en cero
const [modal ,setModal] = useState ({false}); modificar un modal para que se quite
*/



const Formulario = (Pacientes,setPacientes) => {
  const [Nombre, setNombre] = useState('');
  const [Propietario, setPropietario] = useState('');
  const [email, setemail] = useState('');
  const [Fecha, setFecha] = useState('');
  const [Sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([Nombre, Propietario, email, Fecha, Sintomas].includes('')) {
      console.log('Se requiere diligenciar todos los campos');
      setError(true);
      return; // Detiene la ejecución si hay un error
    }

    console.log('Todos los campos ingresados correctamente');
    setError(false);



      // objeto paciente 

      const objetoPaciente = {
        Nombre, 
        Propietario,
        email, 
        Fecha, 
        Sintomas
      }


    setPacientes ([...Pacientes, objetoPaciente]);
    // limpiar el formulario

    
    setPropietario ('')
    setNombre ('')
    setFecha ('')
    setemail ('')
    setSintomas ('')
    




  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}

        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario:
          </label>
          <input
            id="Propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600"
            value={Propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>




        <div className="mt-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email de Contacto:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600"
            value={email}
            onChange={(e)=> setemail(e.target.value)}
          />
        </div>




        <div className="mt-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
            Alta:
          </label>
          <input
            id="Alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600"
            value={Fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>





        <div className="mt-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas:
          </label>
          <textarea
            id="Sintomas"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600"
            value={Sintomas}
            onChange={(e)=> setSintomas(e.target.value)}

          />
        </div>


        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
          cursor-pointer transition-colors mt-5 rounded-md"
          value="Agregar Paciente"
     

        />
      </form>
    </div>
  );
};

export default Formulario;