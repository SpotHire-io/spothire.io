import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import BasicButton from '../../components/Buttons/BasicButton';

import Icon from 'react-geomicons';

class AvailabilityEditor extends React.Component {
    constructor(props) {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <div className="tr mt3">
                    <BasicButton className="button--positive" onClick={this.props.onSubmitAvailability}>Save Availability</BasicButton>
                </div>
            </div>
        );
    }
}

AvailabilityEditor.defaultProps = {
    className: '',
};

AvailabilityEditor.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
    onSubmitAvailability: PropTypes.func.isRequired,
};

export default AvailabilityEditor;
