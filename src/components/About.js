import Slide from "./Slide";
import Cmd from "./Cmd";
import React, {useState, useEffect} from 'react'

const About = (props) => {
    const [count, setCount] = useState(0);
    const [giro, setGiro] = useState("derecha");

    useEffect(() => {
        setInterval(() => {
            if(count%2 === 0){
                setGiro("derecha")
            }else{
                setGiro("izquierda")
            }
            setCount(count+1)
        }, 1000);
      }, [setGiro]);
    return (
        <div className={"container"+props.color}>
            <div className={"contenedor"+props.color} id="section1">
                <div className="row">
                    <div className="col-6">
                        <div className="up ">
                            <img className={"centrado "+giro} src="img/foto.jpg" />
                            <span className="l-br-s">-</span>
                            <h1 className="h1-titulo"><span>Hola,</span> Soy Alejandro.</h1>
                            <Slide />
                            <a href="CV_Alejandro_ValenciaNavarro.pdf" download="CV_Alejandro_ValenciaNavarro.pdf">
                                <button className="btn btn-curriculo">Obtén mi CV <i class="fa fa-download" aria-hidden="true"></i></button>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 img">
                        <div className={"codigo codigo"+props.color}>
                            <p className={"p-codigo p-codigo"+props.color}><span className="fa fa-terminal"></span> simbolo del sistema</p>
                            <p className={"p-codigo p-codigo-t"+props.color}> C:\Users\Alejandro{'>'}
                                <Cmd />
                            </p>
                            <div className="net">
                                <ul className={"lCodigo lCodigo"+props.color}>
                                    <li>1 <span>public class miProyecto{' {'}</span></li>
                                    <li>2 <span className="tap1">public static void main(String[] args){' {'}</span></li>
                                    <li>3 <span className="tap2">String nombre = "Alejandro";</span></li>
                                    <li>4 <span className="tap2">System.out.println("Hola soy "+nombre);</span></li>
                                    <li>5 <span className="tap1">{'}'}</span></li>
                                    <li>6 <span>{'}'}</span></li>
                                </ul>
                            </div>
                            <p className={"pU-codigo pU-codigo"+props.color}> Hola soy Alejandro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
        </div>
    );
}

export default About;