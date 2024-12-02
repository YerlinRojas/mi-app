
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {
  const [mostrarFormulario, actulizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "https://github.com/harlandlohora.png",
      nombre: "prueba1",
      puesto: "prueba1",
      fav: true
    } ,
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/harlandlohora.png",
      nombre: "prueba2",
      puesto: "prueba2",
      fav: false
    }   
  
  ])

  const [equipos, actualizarEquipos]= useState(
    [
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ]
  )

  const cambiarMostrar = () =>{
    actulizarMostrar(!mostrarFormulario)
  }

//registra colaborador
const registraColaborador = (colaborador) => {
    console.log("colaborador desde app" , colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador])
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

//Actualizar color
const actualizarColor = (color, id) => {
console.log("Actualizar color: " , color, id)
const equiposActualizados = equipos.map((equipo)=> {
  if(equipo.id === id){
    equipo.colorPrimario = color
  }
  return equipo 
})

  actualizarEquipos(equiposActualizados)
}

const crearEquipo = (nuevoEquipo) => {
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador)=>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}


  //podemos usar en vez de ternario , cortocircuito
  //ternario
  //{mostrarFormulario  ? <Formulario/> : <></>}
  // condicion && seMuestra
  //{mostrarFormulario && <Formulario/>}
  return (
    <div className="App">
      <Header/>
      
      {
      mostrarFormulario && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
      registraColaborador={registraColaborador} 
      crearEquipo={crearEquipo} 
        />}
    
    <MiOrg cambiarMostrar= {cambiarMostrar} />
    {
      equipos.map( (datos)=> <Equipo 
      datos={datos} 
      key={datos.titulo}
      //aqui es donde hace macth el equipo con la eleccion de equipo
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === datos.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like = {like}
      
      />)
        
    }
    <Footer/>
    </div>
  );
}

export default App;
