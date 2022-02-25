import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import React from 'react'
import ReactPlayer from 'react-player'
const ModalHabilidad = (props) => {
    let subtitle;
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
        props.setIsOpen(false);
    }
    return (
        <div>
            <Modal
                    isOpen={props.modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button className="btn-close" onClick={closeModal}><i className="fa fa-times"></i></button>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    <img src="img/cmd.png"/>
                    <div className="decripcion-video">
                        <p className="titulo-video">App punto de venta</p>
                        <div className="linea-c"></div>
                        <p>App android desarrollada en android studio con java, se uso SQLite para almacenar información.</p>
                    </div>
                </Modal>
        </div>
    );
}

export default ModalHabilidad