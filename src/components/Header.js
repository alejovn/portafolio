import { useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = (props) => {
  useEffect(() => {
    scrollToTop()
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (

    <div className="navbar" id="navbar">
      <a></a>
      <Link to="section1" className='hover-underline-animation' smooth={true}><i className='fa fa-home'></i> Home</Link>
      <Link to="section2" className='hover-underline-animation' smooth={true}><i className='fa fa-user-secret'></i> Sobre mi</Link>
      <Link to="section3" className='hover-underline-animation' smooth={true}><i className='fa fa-certificate'></i> Mas</Link>
      <Link to="section4" className='hover-underline-animation' smooth={true}><i className='fa fa-briefcase'></i> Experiencia</Link>
      <a className="icon" onClick={props.onChange}>
        <i className={props.estado}></i>
      </a>
    </div>
  );
}

export default Header