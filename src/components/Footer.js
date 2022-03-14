const Footer = (props) => {
    return(
        <footer className={"footerpage"+props.color}>
              <a href="https://www.facebook.com/AlejoValenciaN" target="_blank">
                <button className="click fondo-btn-f">
                  <span className="tooltip">Facebook</span>
                </button>
              </a>
              <a href="https://www.instagram.com/alejovn/?hl=es-la" target="_blank">
                <button className="click fondo-btn-i">
                  <span className="tooltip">Instagram</span>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/alejandro-valencia-37265296/" target="_blank">
                <button className="click fondo-btn-l">
                  <span className="tooltip">LinkedIn</span>
                </button>
              </a>
              <a href="https://github.com/alejovn" target="_blank">
                <button className="click fondo-btn-D">
                  <span className="tooltip">GitHub</span>
                </button>
              </a>
              <h3>Author: Alejandro Valencia Navarro</h3>
        </footer>
    )
}

export default Footer