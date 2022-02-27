import './App.css';
import './css/menu_lado.css';
import './css/body.css';
import './css/sobremi.css';
import './css/contact.css';
import './css/section.css';
import './css/footer.css';
import './css/experiencia.css';
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

  const nav = React.createRef();
  const a = React.createRef();
  const button = React.createRef();
  
  const codigo = React.createRef();
  const pCodigo = React.createRef();
  const pDosCodigo = React.createRef();
  const lCodigo = React.createRef();
  const pUCodigo = React.createRef();
  const content = React.createRef();
  
  const android = React.createRef();
  const php = React.createRef();
  const java = React.createRef();
  const section5 = React.createRef();
  const contacto_div = React.createRef();

  useEffect(() => {
    if (count % 2 === 0) {
      setClassNameH("habilidadDark");
      setContainer("containerDark");
      setContact("contactDark");
      setSection("sectionDark");
      setSection4("section4Dark")
      nav.current.style.backgroundColor = '#383838';
      a.current.style.color = 'white';
      button.current.style.backgroundColor = '#383838';
      button.current.style.color = 'white';
      section5.current.style.backgroundColor = '#303030';
      section5.current.style.color = 'white';

      contacto_div.current.style.backgroundColor = '#383838';

      android.current.style.backgroundColor = '#383838';
      php.current.style.backgroundColor = '#383838';
      java.current.style.backgroundColor = '#383838';

      codigo.current.style.backgroundColor = 'black';
      codigo.current.style.color = 'black';
      pDosCodigo.current.style.color = 'white';
      pUCodigo.current.style.color = 'white';
      lCodigo.current.style.color = 'white';
      pCodigo.current.style.backgroundColor = 'white';
      content.current.style.backgroundColor = '#303030';
      content.current.style.color = 'white';


    } else {
      setClassNameH("habilidadLight");
      setContainer("containerLight");
      setContact("contactLight");
      setSection("sectionLigth");
      setSection4("section4Light");
      nav.current.style.backgroundColor = 'white';
      a.current.style.color = 'black';
      button.current.style.backgroundColor = 'white';
      button.current.style.color = 'black';

      section5.current.style.backgroundColor = 'white';
      section5.current.style.color = 'black';

      contacto_div.current.style.backgroundColor = 'white';

      android.current.style.backgroundColor = 'white';
      php.current.style.backgroundColor = 'white';
      java.current.style.backgroundColor = 'white';

      codigo.current.style.backgroundColor = 'white';
      codigo.current.style.color = 'white';
      pDosCodigo.current.style.color = 'black';
      pUCodigo.current.style.color = 'black';
      lCodigo.current.style.color = 'black';
      codigo.current.style.borderColor = 'black';
      pCodigo.current.style.backgroundColor = 'black';
      content.current.style.backgroundColor = 'white';
      content.current.style.color = 'black';
    }
  });

  return (
    <div className="App">
      <MenuLado setCount={setCount} count={count} nav={nav} a={a} button={button} />
      <About container={container} codigo={codigo} pCodigo={pCodigo}
        pDosCodigo={pDosCodigo} lCodigo={lCodigo} pUCodigo={pUCodigo} />
      <Sobremi contact={contact} content={content} />
      <Section classNameH={classNameH} section={section} />
      <Experiencia section4={section4} android={android} php={php} java={java} />

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
  );
}

export default App;
