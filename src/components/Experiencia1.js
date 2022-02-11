import Modal from 'react-modal';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
const Experiencia = () => {
    var cellCount = 9;
    var selectedIndex = 0;
    var carousel = React.createRef();
    function rotateCarousel() {
        var angle = selectedIndex / cellCount * -360;
        carousel.current.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }
    const agregarClick = (button) => {
        if (button === "Next") {
            selectedIndex++;
            rotateCarousel();
        }
        else {
            selectedIndex--;
            rotateCarousel();
        }
    };
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
        <div className="row all">
            <div className="col-1">
                <button className="ir-izquierda fa fa-angle-left" onClick={() => agregarClick("Previous")}></button>
            </div>
            <div className="col-10" id="section4">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <section className="containerC">
                    <div ref={carousel} className="carousel" id="carousel">
                        <figure className="carousel__cell">
                            <div className="container-img" onClick={() => abrirModal(1)}>
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img" onClick={() => abrirModal(2)}>
                                <img className="img-carrusel" src="img/fondo.jpg" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                        <figure className="carousel__cell">
                            <div className="container-img">
                                <img className="img-carrusel" src="img/android.png" />
                            </div>
                        </figure>
                    </div>
                </section>
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
            <div className="col-1">
                <button className="ir-derecha fa fa-angle-right" onClick={() => agregarClick("Next")}></button>
            </div>


        </div>
    );
}
export default Experiencia