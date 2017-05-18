import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../../schemas/Person';

import classNames from 'classnames';

import Icon from 'react-geomicons';

class SelectTalent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                radio button selector with three categories and their interfaces...
            </div>
        );
    }
}

SelectTalent.defaultProps = {
    className: '',
};

SelectTalent.propTypes = {
    className: PropTypes.string,
    selectionCategories: PropTypes.object.isRequired,
};

export default SelectTalent;
