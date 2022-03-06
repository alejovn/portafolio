import React, { useState, useEffect } from 'react';

import { Link } from "react-scroll";
const MenuLado = (props) => {
    const [cont, setCont] = useState(0);
    const [clase, setClase] = useState("fa fa-bars");

    const openMenu = () => {
        props.nav.current.classList.toggle('active');
        if(cont%2===0){
            setClase ("fa fa-times");
        }else{
            setClase("fa fa-bars");
        }
        setCont(cont + 1); 
    };

    return (
        <div>
            <header>
                <div ref={props.button} className="menu_bar">
                    <a className="bt-menu" onClick={() => openMenu()}><span className={clase}></span>Menu</a>
                </div>
                <nav ref={props.nav}>
                    <ul ref={props.a}>
                        <label className="switch">
                            <input type="checkbox" className="switch-input" onClick={() => props.setCount(props.count + 1)} />
                            <span className="switch-label" data-on="DARK" data-off="LIGHT"></span>
                            <span className="switch-handle"></span>
                        </label>
                        <li><Link activeClass="active" to="section1" spy={true} duration={2000} className='hover-underline-animation' smooth={true} onClick={() => openMenu()}><i className='fa fa-home'></i> Inicio</Link></li>
                        <li><Link activeClass="active" to="section2" spy={true} duration={2000} className='hover-underline-animation' smooth={true} onClick={() => openMenu()}><i className='fa fa-user-secret'></i> Sobre mi</Link></li>
                        <li><Link activeClass="active" to="section3" spy={true} duration={2000} className='hover-underline-animation' smooth={true} onClick={() => openMenu()}><i className='fa fa-certificate'></i> Tecnologías</Link></li>
                        <li><Link activeClass="active" to="section4" spy={true} duration={2000} className='hover-underline-animation' smooth={true} onClick={() => openMenu()}><i className='fa fa-laptop'></i> Mis Proyectos</Link></li>
                        <li><Link activeClass="active" to="section5" spy={true} duration={2000} className='hover-underline-animation' smooth={true} onClick={() => openMenu()}><i className='fa fa-address-card'></i> Contacto</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default MenuLado;