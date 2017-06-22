import 'moment/locale/en-ca';
import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../../../components/Buttons/BasicButton';
import NewTimeOffRequestModal from './Modal';

class TimeOffRequestNew extends React.Component {
    constructor() {
        super();

        this.openNewTimeOffRequestModal = this.openNewTimeOffRequestModal.bind(this);
        this.closeNewTimeOffRequestModal = this.closeNewTimeOffRequestModal.bind(this);

        this.state = {
            isNewTimeOffRequestModalOpen: false,
        };
    }

    openNewTimeOffRequestModal() {
        this.setState({ isNewTimeOffRequestModalOpen: true });
    }

    closeNewTimeOffRequestModal() {
        this.setState({ isNewTimeOffRequestModalOpen: false });
    }

    render() {
        return (
            <div className={this.props.className}>
                <BasicButton className="button--positive" onClick={this.openNewTimeOffRequestModal}>New Request</BasicButton>
                <NewTimeOffRequestModal
                    isOpen={this.state.isNewTimeOffRequestModalOpen}
                    closeModal={this.closeNewTimeOffRequestModal}
                    onSubmitRequest={this.props.addRequest}
                />
            </div>
        );
    }
}

TimeOffRequestNew.defaultProps = {
    className: 'tr mt3',
};

// TimeOffRequestNew.propTypes = {
//     className: PropTypes.string,
//     addRequest: PropTypes.func.isRequired,
// };

export default TimeOffRequestNew;
