import React from 'react';
import ReactDOM from 'react-dom';

const ModalBox = {
    showModal: (message) => {
        let config = {
            open: true,
            message: message
        };
        const modal = getMessageBox(config);
        ReactDOM.render(modal, document.getElementById('messageModalBox'));
    }
}
const modalCloseHandler = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    ReactDOM.unmountComponentAtNode(document.getElementById('messageModalBox'));
};
const getMessageBox = (config) => {
    return (
        <div>
            <div className="backDrop__overlay">
                <div className='modal_container'>
                    <div className="modal__close-icons">
                        <div className="icon" onClick={modalCloseHandler}>X</div>
                    </div>
                    <div className="modal_header">
                        {config.message.headerName}
                    </div>
                    <div className="modal_body">
                        {config.message.body}
                    </div>
                    <div className="modal_footer">
                        {config.message.footer}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ModalBox;
