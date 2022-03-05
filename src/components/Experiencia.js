import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel_ from './Carousel_'

const Experiencia = (props) => {

    return (
        <div className={props.section4}>
            <div id="section4">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <h1 className="h1-title">Proyectos personales</h1>
                <div className="linea-habilidad"></div>
                <span className="l-br">-</span>
                <Carousel_ experiencia={props.experiencia}/>
            </div>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
        </div >
    );
}

export default Experiencia;