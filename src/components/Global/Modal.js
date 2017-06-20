import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RModal from 'react-modal';

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

Modal.propTypes = {
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    contentLabel: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
