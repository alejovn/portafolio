import React, { useState } from "react";
import ModalHabilidad from "../components/ModalHabilidad"

const Section = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const abrirModal = (ventana) => {
    setIsOpen(true);
  };
  return (
    <div ref={props.section} className="container">
      <div id="section3" className="habilidad">
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <h1>Habilidades</h1>
        <div className="row _fondo-section">
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <div className="row">
                <div className="col-6">
                  <div className="img-habilidades">
                    <img className="" src="img/java.png" />
                  </div>
                </div>
                <div className="col-6">
                  <h1>Java</h1>
                </div>
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>public class holaMundo{' {'}</span></li>
                  <li>2 <span className="tap1">public static void main(String[] args){' {'}</span></li>
                  <li>3 <span className="tap2">System.out.println("Hola Mundo");</span></li>
                  <li>4 <span className="tap1">{'}'}</span></li>
                  <li>5 <span>{'}'}</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a onClick={() => abrirModal()} class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>VB.net</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/vb.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>Module Module1</span></li>
                  <li>2 <span className="tap1">Sub Main()</span></li>
                  <li>3 <span className="tap2">System.Console.WriteLine("Hola Mundo")</span></li>
                  <li>4 <span className="tap2">System.Console.ReadLine()</span></li>
                  <li>5 <span className="tap1">End Sub</span></li>
                  <li>6 <span>End Module</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>PHP</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/php.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>{"<html>"}</span></li>
                  <li>2 <span className="tap1">{"<head>"}</span></li>
                  <li>3 <span className="tap2">{"<title>Prueba de PHP</title>"}</span></li>
                  <li>4 <span className="tap2">{"</head>"}</span></li>
                  <li>5 <span className="tap3">{"<body>"}</span></li>
                  <li>6 <span className="tap2">{"<?php echo '<p>Hola Mundo</p>';?>"}</span></li>
                  <li>7 <span className="tap1">{"</body>"}</span></li>
                  <li>8 <span>{"</html>"}</span></li>
                </ul>

              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row _fondo-section">
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>JavaScript</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/javascript.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>{"<html>"}</span></li>
                  <li>2 <span className="tap1">{"<body>"}</span></li>
                  <li>3 <span className="tap2">{"<h1>Primer código JavaScript</h1>"}</span></li>
                  <li>4 <span className="tap2">{"<script>"}</span></li>
                  <li>5 <span className="tap3">{"document.write('Hola Mundo');"}</span></li>
                  <li>6 <span className="tap2">{"</script>"}</span></li>
                  <li>7 <span className="tap1">{"</body>"}</span></li>
                  <li>8 <span>{"</html>"}</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a onClick={() => abrirModal()} class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Bootstrap</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/bootstrap.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>{"<html>"}</span></li>
                  <li>2 <span className="tap1">{"<head>"}</span></li>
                  <li>3 <span className="tap2">{"<link rel='stylesheet' href='bootstrap.min.css'>"}</span></li>
                  <li>4 <span className="tap1">{"</head>"}</span></li>
                  <li>5 <span className="tap1">{"<body>"}</span></li>
                  <li>6 <span className="tap2">{"<button class='btn btn-dark'>Dark</button>"}</span></li>
                  <li>7 <span className="tap1">{"</body>"}</span></li>
                  <li>8 <span>{"</html>"}</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Angular</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/angular.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>public class holaMundo{' {'}</span></li>
                  <li>2 <span className="tap1">public static void main(String[] args){' {'}</span></li>
                  <li>3 <span className="tap2">System.out.println("Hola Mundo");</span></li>
                  <li>4 <span className="tap1">{'}'}</span></li>
                  <li>5 <span>{'}'}</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row _fondo-section">

          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>React</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/react.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>{"function App() {"}</span></li>
                  <li>2 <span className="tap1">{"return ("}</span></li>
                  <li>3 <span className="tap2">{"<div>"}</span></li>
                  <li>4 <span className="tap2">{"<p>Hola Mundo</p>"}</span></li>
                  <li>5 <span className="tap3">{"</div>"}</span></li>
                  <li>6 <span className="tap2">{");"}</span></li>
                  <li>7 <span>{"}"}</span></li>
                  <li>8 <span>{"export default App;"}</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>Python</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/python.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>print("hello world")</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={"habilidades " + props.classNameH}>
              <span className="l-br-s">-</span>
              <div>
                <h1>MySQL</h1>
              </div>
              <div className="img-habilidades">
                <img className="" src="img/mysql.png" />
              </div>
              <div className="codigo-java">
                <ul>
                  <li>1 <span>CREATE DATABASE Saludo;</span></li>
                  <li>2 <span className="tap1">USE Saludo</span></li>
                  <li>3 <span className="tap2">CREATE TABLE 'saludo' (</span></li>
                  <li>4 <span className="tap1">{"'id' INT NOT NULL AUTO_INCREMENT, "}</span></li>
                  <li>5 <span>{"'saludo' VARCHAR(50) NOT NULL, "}</span></li>
                  <li>6 <span className="tap1">{"PRIMARY KEY ('id')"}</span></li>
                  <li>7 <span>{")ENGINE = InnoDB;"}</span></li>
                </ul>
              </div>
              <div className="btn-div">
                <a href="#" class="ver-mas">
                  <div>
                    <span></span>
                  </div>
                  <p>Ver más</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
        <span className="l-br">-</span>
      </div>
      <ModalHabilidad modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Section
