
const Sobremi = (props) => {
    return (
        <div className={props.contact}>
            <div id="section2" className="sobre-mi">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <h1 className="h1-title">Sobre mi</h1>
                <div className="linea-habilidad"></div>
                <span className="l-br">-</span>
                <div className="row">
                    <div className="col-5">
                        <div className="img-sobreMi">
                            <img src="img/foto.jpg" />
                        </div>
                    </div>
                    <div className="col-7">
                            <span className="l-br-c">-</span>
                            <div className="titulo-quien-soy">
                                <h1>Quien soy?</h1>
                            </div>
                            <div className="linea-c"></div>
                            <div className="quien-soy">
                                <p>Mi nombre es Alejandro Valencia Navarro, Soy desarrollador de software full stack,
                                    un apasionado por el desarrollo de sistemas de información tanto de escritorio, aplicaciones moviles como de aplicaciones web,
                                    me encanta encontrarme con proyectos y retos nuevos en diferentes tipos de lenguajes de programacion,
                                    tengo conocimiento sobre una variada cantidad de tecnologías informáticas (frameworks, librerías, lenguajes, ojas de estilo, bases de datos).
                                    </p>
                                    <p>Soy graduado bachiller de la carrera Informatica Empresarial de la Universidad de Costa Rica</p>
                            </div>
                    </div>
                </div>
            </div>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
        </div>
    )
}

export default Sobremi