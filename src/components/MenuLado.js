
import { Link} from "react-scroll";
const MenuLado = (props) => {
    
    
    const openMenu = () => {
        props.nav.current.classList.toggle('active');
    };
    return (
        <div>
            <header>
                <div ref={props.button} className="menu_bar">
                    <a className="bt-menu" onClick={() => openMenu()}><span className="fa fa-bars"></span>Menu</a>
                </div>
                <nav ref={props.nav}>
                    <ul ref={props.a}>
                    <label className="switch">
                            <input type="checkbox" className="switch-input" onClick={() => props.setCount(props.count + 1)} />
                            <span className="switch-label" data-on="DARK" data-off="LIGHT"></span>
                            <span className="switch-handle"></span>
                        </label>
                        <li><Link  to="section1" className='hover-underline-animation' smooth={true}><i className='fa fa-home'></i> Home</Link></li>
                        <li><Link  to="section2" className='hover-underline-animation' smooth={true}><i className='fa fa-user-secret'></i> Sobre mi</Link></li>
                        <li><Link  to="section3" className='hover-underline-animation' smooth={true}><i className='fa fa-certificate'></i> Mas</Link></li>
                        <li><Link  to="section4" className='hover-underline-animation' smooth={true}><i className='fa fa-briefcase'></i> Experiencia</Link></li>
                        <li><Link  to="section2" className='hover-underline-animation' smooth={true}><i className='fa fa-address-card'></i> Contacto</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default MenuLado;