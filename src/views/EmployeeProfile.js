import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../schemas/Person';

import classNames from 'classnames';

import Box from '../components/Global/Box';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class EmployeeProfileView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div>
                {this.props.employee.firstName}
            </div>
        );
    }
}

EmployeeProfileView.defaultProps = {
    className: '',
};

EmployeeProfileView.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
};

export default EmployeeProfileView;
