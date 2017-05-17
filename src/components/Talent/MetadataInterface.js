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
            <ul className={classNames('list ml0 pl0 bg-near-white bb b--black-20', this.props.className)}>
                {this.props.talent.metadata.map((metaPair) => {
                    return (
                        <li className="ph3 pv2 ma0 bt bl br b--black-20">
                            <dl className="ma0 pa0 list flex">
                                <dt className="w-third">{metaPair.key}</dt>
                                <dd className="w-two-thirds pa0">{metaPair.value}</dd>
                            </dl>
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
