import './App.css';
import './css/menu_lado.css';
import './css/body.css';
import './css/contact.css';
import './css/section.css';
import './css/footer.css';
import './css/experiencia.css';
import React, { useState, useEffect } from 'react';
import MenuLado from './components/MenuLado';
import About from './components/About';
import Experiencia from './components/Experiencia';
import Section from "./components/Section";
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  
  const [i, setI] = useState("fa fa-bars")
  const [titulo, setTitulo] = useState("titulo")
  const [count, setCount] = useState(0);
    const nav = React.createRef();
    const a = React.createRef();
    const button = React.createRef();
    const container = React.createRef();
    const contact = React.createRef();
    const codigo = React.createRef();
    const pCodigo = React.createRef();
    const pDosCodigo = React.createRef();
    const lCodigo = React.createRef();
    const pUCodigo = React.createRef();
    const lenguajes = React.createRef();
    const row = React.createRef();
    const content = React.createRef();
    const section4 = React.createRef();
    const android = React.createRef();
    const php = React.createRef();
    const java = React.createRef();
    const academico = React.createRef();
    const intereses = React.createRef();
    const habilidades = React.createRef();
    const section = React.createRef();
  
    useEffect(() => {
      if(count%2===0){
          nav.current.style.backgroundColor='#383838';
          a.current.style.color='white';
          button.current.style.backgroundColor='#383838';
          button.current.style.color='white';
          container.current.style.backgroundColor='#303030';
          contact.current.style.backgroundColor='#303030';
          section4.current.style.backgroundColor='#303030';
          section4.current.style.color='white';

          android.current.style.backgroundColor='#383838';
          php.current.style.backgroundColor='#383838';
          java.current.style.backgroundColor='#383838';

          section.current.style.backgroundColor='#303030';
          academico.current.style.backgroundColor='#383838';
          intereses.current.style.backgroundColor='#383838';
          habilidades.current.style.backgroundColor='#383838';
          academico.current.style.color='white';
          intereses.current.style.color='white';
          habilidades.current.style.color='white';

          codigo.current.style.backgroundColor='black';
          codigo.current.style.color='black';
          pDosCodigo.current.style.color='white';
          pUCodigo.current.style.color='white';
          lCodigo.current.style.color='white';
          row.current.style.color='white';
          pCodigo.current.style.backgroundColor='white';
          lenguajes.current.style.backgroundColor='#383838';
          content.current.style.backgroundColor='#303030';
          content.current.style.color='white';
          

      }else{
          nav.current.style.backgroundColor='white';
          a.current.style.color='black';
          button.current.style.backgroundColor='white';
          button.current.style.color='black';
          container.current.style.backgroundColor='white';
          contact.current.style.backgroundColor='white';
          section4.current.style.backgroundColor='white';
          section4.current.style.color='black';

          android.current.style.backgroundColor='white';
          php.current.style.backgroundColor='white';
          java.current.style.backgroundColor='white';

          section.current.style.backgroundColor='white';
          academico.current.style.backgroundColor='white';
          intereses.current.style.backgroundColor='white';
          habilidades.current.style.backgroundColor='white';
          academico.current.style.color='black';
          intereses.current.style.color='black';
          habilidades.current.style.color='black';

          codigo.current.style.backgroundColor='white';
          codigo.current.style.color='white';
          pDosCodigo.current.style.color='black';
          pUCodigo.current.style.color='black';
          lCodigo.current.style.color='black';
          row.current.style.color='black';
          codigo.current.style.borderColor='black';
          pCodigo.current.style.backgroundColor='black';
          lenguajes.current.style.backgroundColor='white';
          content.current.style.backgroundColor='white';
          content.current.style.color='black';
      }
  });

  return (
    <div className="App">
      <MenuLado estado={i} setCount={setCount} count={count} nav={nav} a={a} button={button}/>
      <About estado={titulo} container={container} codigo={codigo} pCodigo={pCodigo} 
      pDosCodigo={pDosCodigo} lCodigo={lCodigo} pUCodigo={pUCodigo} lenguajes={lenguajes} row={row}/>
      <Contact contact={contact} content={content}/>
      <Section section={section} academico={academico} intereses={intereses} habilidades={habilidades}/>
      <Experiencia section4={section4} android={android} php={php} java={java}/>
      <Footer />

      <Link to="section1" smooth={true}><i><span className="ir-arriba fa fa-chevron-up"></span></i></Link>
    </div>
  );
}

export default App;
