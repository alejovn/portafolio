import React from "react";

const Section = (props) => {
  return (
    <div ref={props.section} className="container">
      <div id="section3">
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <div className="row _fondo-section">
          <div className="col-4">
          <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <div ref={props.academico} className="academico">
              <span className="l-br-s">-</span>
              <div className="titulo-quien-soy">
                <h1>Academico</h1>
              </div>
              <div className="linea"></div>
              <h2>Cursos relevantes</h2>
              <ul className="section-ul">
                <li>Administración de base de datos MySQL</li>
                <li>Programación</li>
                <li>Ingeniería de Software</li>
                <li>Gestión de proyectos</li>
              </ul>
              <span className="l-br-s">-</span>
              <span className="l-br-s">-</span>
            </div>
          </div>
          <div className="col-4">
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <div ref={props.intereses} className="intereses">
              <span className="l-br-s">-</span>
              <div className="titulo-quien-soy">
                <h1>Intereses</h1>
              </div>
              <div className="linea"></div>
              <ul className="section-ul">
                <li>Gestión de proyectos</li>
                <li>Excelencia en Liderazgo</li>
                <li>Gestión de TI</li>
                <li>Desarrollador de sistemas</li>
              </ul>
              <span className="l-br-s">-</span>
              <span className="l-br-s">-</span>
              <span className="l-br-s">-</span>
              <span className="l-br-s">-</span>
              <span className="l-br-s">-</span>
            </div>
          </div>
          <div className="col-4">
            <div ref={props.habilidades} className="habilidades">
              <span className="l-br-s">-</span>
              <div className="titulo-quien-soy">
                <h1>Otras habilidades</h1>
              </div>
              <div className="linea"></div>
              <ul className="section-ul">
                <li>Programación Java</li>
                <li>Programación VB.NET</li>
                <li>Programación en PHP</li>
                <li>Programación en python</li>
                <li>Programación android</li>
                <li>HTML5</li>
                <li>MySQL</li>
                <li>Administración / diseño base datos</li>
              </ul>
              <span className="l-br-s">-</span>
            </div>
          </div>
        </div>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
      </div>
    </div>
  );
}

export default Section
