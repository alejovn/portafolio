import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import React from 'react';
import ReactPlayer from 'react-player'
const ModalHabilidad = (props) => {
    let subtitle;

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        props.setIsOpen(false);
    }
    return (
        <div>
            <Modal
                className="modalVideo"
                isOpen={props.modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <button className="btn-close" onClick={closeModal}><i className="fa fa-times"></i></button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                <span className="l-br">-</span>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=HO0ME0yvbtI'
                    className='react-player'
                    controls
                    width='100%'
                    height='92%'
                />
            </Modal>
        </div>
    );
}

export default ModalHabilidad