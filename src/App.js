import './App.css';
import './css/menu_lado.css';
import './css/body.css';
import './css/sobremi.css';
import './css/contact.css';
import './css/section.css';
import './css/footer.css';
import './css/experiencia.css';
import './css/carousel_.css';
import './css/fondo_svg.css'
import React, { useState, useEffect } from 'react';
import MenuLado from './components/MenuLado';
import About from './components/About';
import Experiencia from './components/Experiencia';
import Section from "./components/Section";
import Sobremi from './components/Sobremi';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {

  const [count, setCount] = useState(0);
  const [classNameH, setClassNameH] = useState("habilidadDark");
  const [container, setContainer] = useState("containerDark");
  const [contact, setContact] = useState("contactDark");
  const [section, setSection] = useState("sectionDark");
  const [section4, setSection4] = useState("section4Dark");
  const [section5, setSection5] = useState("section5Dark");
  const [experiencia, setExperiencia] = useState("Dark")

  const nav = React.createRef();
  const a = React.createRef();
  const button = React.createRef();

  const codigo = React.createRef();
  const pCodigo = React.createRef();
  const pDosCodigo = React.createRef();
  const lCodigo = React.createRef();
  const pUCodigo = React.createRef();

  const contacto_div = React.createRef();

  useEffect(() => {
    if (count % 2 === 0) {
      setClassNameH("habilidadDark");
      setContainer("containerDark");
      setContact("contactDark");
      setSection("sectionDark");
      setSection4("section4Dark");
      setSection5("section5Dark");
      setExperiencia("Dark")
      nav.current.style.backgroundColor = '#383838';
      a.current.style.color = 'white';
      button.current.style.backgroundColor = '#383838';
      button.current.style.color = 'white';

      contacto_div.current.style.backgroundColor = '#383838';

      codigo.current.style.backgroundColor = 'black';
      codigo.current.style.color = 'black';
      pDosCodigo.current.style.color = 'white';
      pUCodigo.current.style.color = 'white';
      lCodigo.current.style.color = 'white';
      pCodigo.current.style.backgroundColor = 'white';


    } else {
      setClassNameH("habilidadLight");
      setContainer("containerLight");
      setContact("contactLight");
      setSection("sectionLight");
      setSection4("section4Light");
      setSection5("section5Light");
      setExperiencia("Light")
      nav.current.style.backgroundColor = 'white';
      a.current.style.color = 'black';
      button.current.style.backgroundColor = 'white';
      button.current.style.color = 'black';

      contacto_div.current.style.backgroundColor = 'white';
      codigo.current.style.backgroundColor = 'white';
      codigo.current.style.color = 'white';
      pDosCodigo.current.style.color = 'black';
      pUCodigo.current.style.color = 'black';
      lCodigo.current.style.color = 'black';
      codigo.current.style.borderColor = 'black';
      pCodigo.current.style.backgroundColor = 'black';
    }
  });

  return (
    <div className="App">
      <MenuLado setCount={setCount} count={count} nav={nav} a={a} button={button} />
      <div className="container">
        <svg viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin meet">
          <path d="M0, 130 C150, 230 350,0 500, 130 L500, 00 L0, 0 Z">
          </path>
        </svg>
        <About container={container} codigo={codigo} pCodigo={pCodigo}
          pDosCodigo={pDosCodigo} lCodigo={lCodigo} pUCodigo={pUCodigo} />
        <Sobremi contact={contact} />
        <Section classNameH={classNameH} section={section} />
        <Experiencia section4={section4} experiencia={experiencia} />

        <Contact section5={section5} contacto_div={contacto_div} />

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
        <Footer />


        <Link to="section1" smooth={true}><i><span className="ir-arriba fa fa-chevron-up"></span></i></Link>
      </div>
    </div>
  );
}

export default App;
