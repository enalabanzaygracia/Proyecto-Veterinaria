

const Paciente = () => {
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre:{" "}
      <span className="font-normal normal-case">Coco</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Propietario:{" "}
      <span className="font-normal normal-case">Jesus Andres Salazar</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email:{" "}
      <span className="font-normal normal-case">jasalazar493@gmail.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha de Alta:{" "}
      <span className="font-normal normal-case">2 de julio del 2024</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Síntomas:{" "}
      <span className="font-normal normal-case">Algunos síntomas aquí</span>
    </p>
  </div>
  )
}

export default Paciente;
