import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import React from 'react';
import ReactPlayer from 'react-player'
const ModalHabilidad = (props) => {
    let subtitle;
    const customStyles = {
        content: {
            backgroundColor: 'transparent',
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
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=HO0ME0yvbtI'
                    className='react-player'
                    controls
                    width='100%'
                    height='100%'
                />
            </Modal>
        </div>
    );
}

export default ModalHabilidad