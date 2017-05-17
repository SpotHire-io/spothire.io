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
            <ul className={classNames('list ml0 pl0 bg-light-gray bb b--black-20', this.props.className)}>
                {this.props.talent.metadata.map((metaPair) => {
                    return (
                        <li className="flex ph3 pv2 bt b--black-20">
                            <p>{metaPair.key}</p>
                            <p>{metaPair.value}</p>
                        </li>
                    )
                })}
            </ul>
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
