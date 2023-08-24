import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {

  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  useEffect( () => {
    const ObtenerLS = () => {
      const pacientesLS =  JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(pacientesLS)
      setPacientes(pacientesLS)
    }
    ObtenerLS()
  }, [])

  useEffect( () => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacientesActualizados) 
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes} 
          setPacientes={setPacientes} 
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
