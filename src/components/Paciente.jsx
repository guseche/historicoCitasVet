function Paciente({paciente,setPaciente,eliminarPaciente}) {

  

  return (
    <div className='m-3 px-5 py-10 bg-white shadow-md rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
          <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Propietario: {''}
          <span className='font-normal normal-case'>{paciente.propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>E-mail: {''}
          <span className='font-normal normal-case'>{paciente.email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {''}
          <span className='font-normal normal-case'>{paciente.fechaAlta}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
          <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>

        <div className='mt-5'>
          <button 
            type="button"
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md mr-2'
            onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button 
            type="button"
            className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md'
            onClick={() => eliminarPaciente(paciente.id)}
          >Eliminar</button>
        </div>

      </div>
  )
}

export default Paciente
