import Slide from "./Slide";
import Cmd from "./Cmd";

const About = (props) => {
    return (
        <div ref={props.container} className="container">
            <div className="contenedor" id="section1">
                <div className="row">
                    <div className="col-6">
                        <div className={"up " + props.estado}>
                        <img className="centrado" src="img/foto.jpg" />
                        <span className="l-br-s">-</span>
                            <h1 className="h1-titulo"><span>Hola,</span> Soy Alejandro.</h1>
                            <Slide />
                            <a href="CV_Alejandro_ValenciaNavarro.pdf" download="CV_Alejandro_ValenciaNavarro.pdf">
                                <button className="btn btn-curriculo">Obtén mi CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 img">
                        <div ref={props.codigo} className="codigo">
                            <p ref={props.pCodigo} className="p-codigo"><span className="fa fa-terminal"></span> simbolo del sistema</p>
                            <p ref={props.pDosCodigo} className="p-codigo"> C:\Users\Alejandro{'>'}
                                <Cmd pDosCodigo={props.pDosCodigo} />
                            </p>
                            <div className="net">
                                <ul ref={props.lCodigo} className="lCodigo">
                                    <li>1 <span>public class miProyecto{' {'}</span></li>
                                    <li>2 <span className="tap1">public static void main(String[] args){' {'}</span></li>
                                    <li>3 <span className="tap2">String nombre = "Alejandro";</span></li>
                                    <li>4 <span className="tap2">System.out.println("Hola soy "+nombre);</span></li>
                                    <li>5 <span className="tap1">{'}'}</span></li>
                                    <li>6 <span>{'}'}</span></li>
                                </ul>
                            </div>
                            <p ref={props.pUCodigo} className="pU-codigo"> Hola soy Alejandro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;