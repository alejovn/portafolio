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
  const [color, setColor] = useState("Dark");
  const nav = React.createRef();

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("Dark");
      nav.current.style.backgroundColor = '#383838';
    } else {
      setColor("Light");
      nav.current.style.backgroundColor = 'white';
    }
  });

  return (
    <div className="App">
      <MenuLado setCount={setCount} count={count} nav={nav} color={color} />
      <div className="container">
        <svg viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin meet">
          <path d="M0, 120 C150, 220 350,0 500, 120 L500, 00 L0, 0 Z">
          </path>
        </svg>
        <About color={color} />
        <Sobremi color={color} />
        <Section color={color} />
        <Experiencia color={color} />
        <Contact color={color} />
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
        <Footer color={color} />
        <Link to="section1" smooth={true}><i><span className="ir-arriba fa fa-chevron-up"></span></i></Link>
      </div>
    </div>
  );
}

export default App;
