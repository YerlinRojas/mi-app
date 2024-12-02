import Colaboradores from "../Colaboradores/Colaboradores"
import "./Equipo.css"
import hexToRgba from "hex-to-rgba"

function Equipo(props) {
    //destructuracion
    const {colorPrimario,colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj = {
      backgroundColor: hexToRgba(colorPrimario, 0.6)
    }


    const estiloTitulo = {borderColor: colorPrimario}

    return <>
    { colaboradores.length > 0 && 
    <section className='equipo' style={obj}>
      <input
         type="color"
         className="input-color"
         value={colorSecundario}
         onChange={(e)=> { 
          actualizarColor(e.target.value, id)
         }}
      ></input>
        <h3 className='equipoTitulo' style={estiloTitulo} >{titulo} </h3>
        <div className='colaboradores'>
          
          {
            colaboradores.map((colaborador, index)=> <Colaboradores 
            datos={colaborador} 
            key={index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            like={like}
            
            />)
          }
        </div>
    </section>
        }
       </>
}

export default Equipo