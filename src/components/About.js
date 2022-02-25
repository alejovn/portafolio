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
                <div ref={props.row} className="row">
                    <div className="col-4">
                        <div className="lenguajes h4">
                            <h4>Frameworks y Librerias</h4>
                            <section className="container-lenguajes">
                                <div id="carousel-lenguajes">
                                    <figure><img src="img/angular.png" /></figure>
                                    <figure><img src="img/bootstrap.png" /></figure>
                                    <figure><img src="img/laravel.png" /></figure>
                                    <figure><img src="img/react.png" /></figure>
                                    <figure><img src="img/jquery.png" /></figure>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-4">
                        <div ref={props.lenguajes} className="lenguajes _centro">
                            <div className="h4">
                                <h4>Amo programar</h4>
                            </div>
                            <div className="linea-c"></div>
                            <div className="cita">
                                <p>"La mayoría de los buenos programadores lo son no porque 
                                    esperen que se les pague o por la adulación del público, 
                                    sino porque les divierte programar" <span>Linus Torvalds.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="lenguajes h4">
                            <h4>Lenguajes</h4>
                            <section className="container-lenguajes">
                                <div id="carousel-lenguajes">
                                    <figure><img src="img/java_.png" /></figure>
                                    <figure><img src="img/javascript.png" /></figure>
                                    <figure><img src="img/vb.png" /></figure>
                                    <figure><img src="img/php.png" /></figure>
                                    <figure><img src="img/python.png" /></figure>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default About;