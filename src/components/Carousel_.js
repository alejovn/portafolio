import React, { useState } from "react";
import ModalExperiencia from "../components/ModalExperiencia"
import Slider from "react-slick";

const Carousel_ = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const abrirModal = (ventana) => {
        setIsOpen(true);
    };
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container-experiencia">
            <Slider {...settings}>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Juego Tic Tac Toe ó Gato, Desarrolado en react, se puede jugar persona vs persona,
                                    o persona vs maquina (IA)
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <p>Puedes probar app <button className="btn-ex"><a href="https://alejovn.github.io/Gato/" target="_blank">Aquí</a></button></p>
                            <p>Puedes ver codigo en github <a className="btn-ex" href="https://github.com/alejovn/Gato" target="_blank" > Aquí</a></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Punto de venta (android, java)</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/android_studio.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/java.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Aplicación punto de venta desarrollada en adroid studio con java, este preyecto fue
                                    desarrollado a modo de proyecto personal para demostrar habilidades en el desarrollo de
                                    aplicaciones moviles.
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <p>Video sobre la app <button className="btn-ex" onClick={() => abrirModal()}>Aquí</button></p>
                            <p>Puedes ver codigo en github <a className="btn-ex" href="https://github.com/alejovn/PuntoVenta-android-" target="_blank" > Aquí</a></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Control Estudiantes con VB.net</h4>
                            <section className="container-ex">
                                <div id="carousel-ex">
                                    <figure><img src="img/diseño.jpg" /></figure>
                                    <figure><img src="img/inicio.jpg" /></figure>
                                    <figure><img src="img/estudiante.jpg" /></figure>
                                    <figure><img src="img/android_studio.png" /></figure>
                                    <figure><img src="img/linux.png" /></figure>
                                </div>
                            </section>
                            <div className="descripcion-ex">
                                <p>Se desarrolló una aplicación modo formulario para almacenar y controlar información de los estudiantes
                                    del Colegio, dicho sistema fue desarrollado en VB.net y como gestor de base de datos se utilizó MySQL.
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Juego Tic Tac Toe ó Gato, Desarrolado en react, se puede jugar persona vs persona,
                                    o persona vs maquina (IA)
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Juego Tic Tac Toe ó Gato, Desarrolado en react, se puede jugar persona vs persona,
                                    o persona vs maquina (IA)
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Juego Tic Tac Toe ó Gato, Desarrolado en react, se puede jugar persona vs persona,
                                    o persona vs maquina (IA)
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Juego Tic Tac Toe ó Gato, Desarrolado en react, se puede jugar persona vs persona,
                                    o persona vs maquina (IA)
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"experiencia_ experiencia" + props.color}>
                        <div className="ex-content">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-ex2">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-ex2-mas">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-ex2">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                            <div className="descripcion-ex">
                                <p>Juego Tic Tac Toe ó Gato, Desarrolado en react, se puede jugar persona vs persona,
                                    o persona vs maquina (IA)
                                </p>
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer" + props.color}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
            </Slider>
            <ModalExperiencia modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
export default Carousel_;

