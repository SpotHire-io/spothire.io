import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import Icon from 'react-geomicons';

class MetadataInterface extends React.Component {
    constructor(props) {
        super();

        this.toggleEditingMetaPair = this.toggleEditingMetaPair.bind(this);
        this.deleteMetaPair = this.deleteMetaPair.bind(this);
        this.createMetaPair = this.createMetaPair.bind(this);

        this.state = {
            currentlyEditingMetaPairKey: null,
            metaPairs: props.talent.metadata
        };
    }

    toggleEditingMetaPair(metaPairKey) {
        let currentlyEditingMetaPairKey = parseInt(this.state.currentlyEditingMetaPairKey);

        // Unset the currently editing metaPair if we’re toggling that metaPair. Else, set to the new metaPair ID.
        if (metaPairKey === currentlyEditingMetaPairKey) {
            currentlyEditingMetaPairKey = null;
        } else {
            currentlyEditingMetaPairKey = metaPairKey;
        }

        return this.setState({ currentlyEditingMetaPairKey });
    }

    deleteMetaPair(metaPairKey) {
        let metaPairs = [...this.state.metaPairs];

        // Drop the metaPair by finding its index
        metaPairs.splice(metaPairs.findIndex((metaPair) => metaPair.key === metaPairKey), 1);

        return this.setState({ metaPairs });
    }

    createMetaPair() {
        let metaPairs = [...this.state.metaPairs];

        // extract the highest ID currently existing so we have something to mock
        const highestId = metaPairs.reduce((currentHighestId, metaPair) => {
            return Math.max(currentHighestId, metaPair.key);
        }, -1);

        metaPairs.push({
            key: '',
            value: ''
        });

        return this.setState({ metaPairs, currentlyEditingMetaPairKey: '' });
    }

    renderControls(metaPair) {
        return (
            <div className="tr">
                <Icon color="#555555" name="compose" className="pointer mt1" onClick={() => this.toggleMetaPairEditing(metaPair.key)}/>
                <Icon color="#555555" name="close" className="pointer mt1 ml2" onClick={() => this.deleteMetaPair(metaPair.key)}/>
            </div>
        );
    }

    render() {
        return (
            <ul className={classNames('list ma0 pa0 bg-near-white bb b--black-20', this.props.className)}>
                {this.state.metaPairs.map((metaPair) => {
                    return (
                        <li className="flex ph3 pv2 ma0 bt bl br b--black-20">
                            <dl className="ma0 pa0 list flex-auto flex">
                                <dt className="w-third">{metaPair.key}</dt>
                                <dd className="w-two-thirds pa0">{metaPair.value}</dd>
                            </dl>
                            {this.renderControls(metaPair.key)}
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
