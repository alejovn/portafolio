
const Sobremi = (props) => {
    return (
        <div className={"contact"+props.color}>
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
                            <img src="img/alejo.png" />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="titulo-quien-soy">
                            <h1>¿Quién soy?</h1>
                        </div>
                        <div className="linea-c"></div>

                        <p className="script_">{"<script>"}</p>
                        <p className="script_t">{"Persona = {"}</p>
                        <p className="script_p">{"Nombre: 'Alejandro',"}</p>
                        <p className="script_p">{"Apellidos: 'Valencia Navarro',"}</p>
                        <p className="script_p">{"Edad: "}<span>30</span>,</p>
                        <p className="script_p">{"Nacionalidad: 'Costarricense'"}</p>
                        <p className="script_t">{"}"}</p>
                        <p className="script_">{"</script>"}</p>
                        <div className="quien-soy">
                            <p>Soy graduado bachiller de la carrera Informática Empresarial de la Universidad de Costa Rica.</p>
                            <p>Soy desarrollador de software full stack,
                                un apasionado por el desarrollo de sistemas de información tanto de escritorio, aplicaciones móviles como de aplicaciones web,
                                me encanta encontrarme con proyectos y retos nuevos en diferentes tipos de lenguajes de programación,
                                tengo conocimiento sobre una variada cantidad de tecnologías informáticas (frameworks, librerías, lenguajes, hojas de estilo, bases de datos).
                            </p>

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