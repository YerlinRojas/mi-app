
import "./MiOrg.css"
const MiOrg = (props) => {
   // recibe por props el estado desde la app , true o false


    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg