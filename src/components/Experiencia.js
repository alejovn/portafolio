import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import React from 'react'
import ReactPlayer from 'react-player'

const Experiencia = (props) => {
    const abrirModal = (ventana) => {
        if (ventana === 1) {
            setIsOpen(true);
        } else {
            alert("ventana dos");
        }
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            backgroundColor: 'antiquewhite',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div ref={props.section4} id="section4">
            <div class="carousel-wrapper">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <Carousel
                    infiniteLoop
                    interval={30000}
                    showArrows={true}
                    selectedItem={0}
                    autoPlay
                    centerMode={true}
                    stopOnHover
                    showStatus={false}
                    showThumbs={false}>
                    <div ref={props.android} className="carousel-content">
                        <div className="row">
                            <div className="col-4">
                                <div className="img_content">
                                    <div className="img_">
                                        <img src="img/Android_icon.png" />
                                    </div>
                                    <div className="linea-E"></div>
                                    <p>Se dearrollo un App para sistema operativo android
                                        la cual conciste en un punto de venta, dicha app fue desarrollada en un
                                        android studio.
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="img_content">
                                    <div className="img_">
                                        <img src="img/java.png" />
                                    </div>
                                    <div className="linea-E"></div>
                                    <p>El lenguaje de programacion utilizado para el de sarrollo
                                        de la App fue JAVA
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="img_content">
                                    <div className="img_">
                                        <img src="img/sqlite.png" />
                                    </div>
                                    <div className="linea-E"></div>
                                    <p>SQLite fue la herramienta de almacenamiento utilizada
                                        para guardar los datos de la App.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6">
                        <button className="btn-ex" onClick={() => abrirModal(1)}><span className="fa fa-eye"></span> Ver video sobre el app</button>
                        </div>
                        <div className="col-6">
                        <a href="Punto de venta.apk" download="Punto_venta.apk"> Link de descarga del APK de la app </a>
                        </div>
                            
                        </div>

                    </div>
                    <div ref={props.php} className="carousel-content">
                        <button className="btn-ex"><span className="fa fa-eye"></span> Ver</button>
                    </div>
                    <div ref={props.java} className="carousel-content">
                        <button className="btn-ex"><span className="fa fa-eye"></span> Ver</button>
                    </div>
                </Carousel>
            </div>
            <div className="row">
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button className="btn-close" onClick={closeModal}><i className="fa fa-times"></i></button>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    <ReactPlayer
                        url='video.mp4'
                        className='react-player'
                        controls
                        width='200px'
                        height='265px'
                    />
                    <div className="decripcion-video">
                        <p className="titulo-video">App punto de venta</p>
                        <div className="linea-c"></div>
                        <p>App android desarrollada en android studio con java, se uso SQLite para almacenar información.</p>
                    </div>
                </Modal>
            </div>
            
        </div>
    );
}

export default Experiencia;