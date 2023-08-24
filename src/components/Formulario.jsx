import { useState, useEffect } from "react"
import Error from "./Error"

function Formulario({ paciente, setPaciente, pacientes, setPacientes }) {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  
  const [error, setError] = useState(false)

  useEffect( () => {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }

    console.log(paciente)

  } , [paciente] )

  const idKey = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    console.log('entre')
    console.log(random+fecha)
    return random + fecha +''
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if([nombre,propietario,email,fechaAlta,sintomas].includes('')){
      console.log('Hay Al menos un campo vacio')
      setError(true)
      return
    }

    setError(false)
    const objPaciente = {nombre,propietario,email,fechaAlta,sintomas}

    if(paciente.id){
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})
    
    }else{
      objPaciente.id = idKey()
      setPacientes([...pacientes,objPaciente])
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')

  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 m-5'>
        
        { error && <Error msj='Todos los campos son obligatorios'/> }
                
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>Nombre Mascota</label>
          <input 
            id='mascota' 
            type="text" 
            placeholder='Nombre de la mascota' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>Nombre propietario</label>
          <input 
            id='propietario' 
            type="text" 
            placeholder='Nombre del propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='e-mail'>E-mail</label>
          <input 
            id='e-mail' 
            type="email" 
            placeholder='E-mail de contacto' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='fechaDeAlta'>Dia de alta</label>
          <input 
            id='fechaDeAlta' 
            type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fechaAlta}
            onChange={ (e) => setFechaAlta(e.target.value) }
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>Sintomas</label>
          <textarea 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Describe los sintomas" 
            id="sintomas" 
            cols="30" 
            rows="10"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          ></textarea>
        </div>
        {console.log(paciente)}
        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md' 
                value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'} 
        />
      </form>

    </div>
  )
}

export default Formulario

