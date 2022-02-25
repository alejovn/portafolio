import React from "react";

const Section = (props) => {
  return (
    <div ref={props.section} className="container">
      <div id="section3" className="habilidad">
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <h1>Habilidades</h1>
        <div className="row _fondo-section">
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Java</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/java.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>JavaScript</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/javascript.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>PHP</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/php.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>VB.net</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/vb.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="row _fondo-section">
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Angular</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/angular.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>React</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/react.png" />
              </div> 
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Bootstrap</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/bootstrap.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Python</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/python.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="row _fondo-section">
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Android Studio</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/angular.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>MySQL</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/mysql.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>SQL</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/angular.png" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={"habilidades "+props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>SQLite</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/sqlite.png" />
              </div>
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
