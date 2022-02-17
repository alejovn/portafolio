
const Sobremi = (props) => {
    return (
        <div ref={props.contact} className="contact">
            <div id="section2">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <div className="row">
                    <div className="col-5 lado">
                        <img className="centrado" src="img/foto.jpg" />
                    </div>
                    <div className="col-6">
                        <div ref={props.content} className="content">
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
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
        </div>
    )
}

export default Sobremi