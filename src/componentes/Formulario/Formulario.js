import { useState } from "react"
import Boton from "../Bonton/Bonton"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import "./Formulario.css"

const Formulario = (props) => {
    const[nombre, actualizarNombre] = useState("")
    const[puesto, actualizarPuesto] = useState("")
    const[foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo]=useState("")

    const [titulo, actualizarTitulo]= useState("")
    const [color, actualizarColor]= useState("")
    const {registraColaborador, crearEquipo} = props


const manejarEnvio = (e )=>{
    e.preventDefault()
    let datosAEnviar = {
        nombre,
        puesto,
        foto,
        equipo

    }
    registraColaborador(datosAEnviar)

}

const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo,colorPrimario: color})
}

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador
            </h2>
            <Campo titulo = 'nombre'  placeholder='Ingresa nombre' required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo = 'puesto'  placeholder='Ingresa Puesto'  required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo = 'foto'  placeholder='Ingresa tu foto' required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton texto='Crear'/>
        </form>

    <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear el equipo
            </h2>
            <Campo titulo = 'Titulo'  placeholder='Ingresa titulo' required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo = 'Color'  placeholder='Ingresa Color hex'  required valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton texto='Registrar equipo'/>
            </form>
    </section>
}

export default Formulario