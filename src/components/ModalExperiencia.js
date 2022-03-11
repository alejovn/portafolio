import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import React from 'react'
import ReactPlayer from 'react-player'
const ModalExperiencia = (props) => {
    let subtitle;
    const customStyles = {
        content: {
            backgroundColor: '#6A98F0',
            borderRadius: 10,
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
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=0Fix7uyS8Es'
                    className='react-player'
                    controls
                    width='340px'
                    height='265px'
                />
                <span className="l-br">-</span>
                <div className="decripcion-video">
                    <p className="titulo-video">App punto de venta</p>
                    <div className="linea-E"></div>
                    <p>App android desarrollada en android studio con java, se uso SQLite para almacenar información.</p>
                </div>
            </Modal>
        </div>
    );
}

export default ModalExperiencia