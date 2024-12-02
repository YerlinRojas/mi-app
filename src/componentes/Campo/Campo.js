import "./CampoTexto.css"

const Campo = (props) => {
    // destructuracion
    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo-${type}`}>
    <label>{props.titulo.toUpperCase()}</label>
    <input placeholder={props.placeholder} required = {props.required} value={props.valor} onChange={manejarCambio} type={type}></input>
    </div>
}

export default Campo