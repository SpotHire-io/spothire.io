import * as React from 'react';
import * as classNames from 'classnames';
import * as RModal from 'react-modal';

interface Props {
    className?: string
    fullWidth?: boolean
    isOpen: boolean
    contentLabel: string
    onClose: React.EventHandler<any>
    children: React.ReactNode
}

/**
 * Wrapper for react-modal to set commonly used props.
 */
const Modal: React.StatelessComponent<Props> = (props) => {
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
