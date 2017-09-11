import React from 'react'
import classNames from 'classnames'
import RModal from 'react-modal'

/**
 * Wrapper for react-modal to set commonly used props.
 */
const Modal = (props) => {
    return (
        <RModal
            overlayClassName="sh-modal-overlay"
            className={classNames('sh-modal sh-shadow-2', { 'sh-modal--full': props.fullWidth })}
            onRequestClose={props.onClose}
            closeTimeoutMS={100}
            {...props}
        >
            {props.children}
        </RModal>
    );
};

Modal.defaultProps = {
    fullWidth: false,
};

export default Modal;
