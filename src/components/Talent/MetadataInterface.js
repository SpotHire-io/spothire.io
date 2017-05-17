import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

class MetadataInterface extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                some cool metadata
            </div>
        );
    }
}

MetadataInterface.defaultProps = {
    className: '',
};

MetadataInterface.propTypes = {
    className: PropTypes.string,
    talent: PersonSchema.isRequired,
};

export default MetadataInterface;
