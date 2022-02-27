
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
                    <div className="col-5 lado">
                        <img className="centrado" src="img/foto.jpg" />
                    </div>
                    <div className="col-6">
                        <div ref={props.content} className="content_sobremi">
                            <span className="l-br-c">-</span>
                            <div className="titulo-quien-soy">
                                <h1>Soy Alejandro Valencia</h1>
                            </div>
                            <div className="linea-c"></div>
                            <div className="quien-soy">
                                <p>Desarrollador de software full stack,
                                    soy un apasionado por el desarrollo de sistemas tanto de escritorio como aplicaciones web,
                                    me encanta encontrarme con proyectos y retos nuevos,
                                    tengo un gran conocimiento sobre varios lenguajes de programación,
                                    frameworks y librerías.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobremi