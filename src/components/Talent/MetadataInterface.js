import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import BasicButton from '../../components/Buttons/BasicButton';

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
        let currentlyEditingMetaPairKey = this.state.currentlyEditingMetaPairKey;

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
            <div className="tr self-center ml2">
                <Icon color="#555555" name={(metaPair.key !== this.state.currentlyEditingMetaPairKey) ? 'compose' : 'check'} className="pointer mt1" onClick={() => this.toggleEditingMetaPair(metaPair.key)}/>
                <Icon color="#555555" name="close" className="pointer mt1 ml2" onClick={() => this.deleteMetaPair(metaPair.key)}/>
            </div>
        );
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <ul className="list ma0 pa0 bg-near-white bb b--black-20">
                    {this.state.metaPairs.map((metaPair) => {
                        if (metaPair.key !== this.state.currentlyEditingMetaPairKey) {
                            return (
                                <li className="flex ph3 pv2 ma0 bt bl br b--black-20" key={metaPair.key}>
                                    <dl className="ma0 pa0 list flex-auto flex">
                                        <dt className="w-third">{metaPair.key}</dt>
                                        <dd className="w-two-thirds pa0">{metaPair.value}</dd>
                                    </dl>
                                    {this.renderControls(metaPair)}
                                </li>
                            )
                        } else {
                            return (
                                <li className="flex ph3 pv1 ma0 bt bl br b--black-20" key={metaPair.key}>
                                    <dl className="ma0 pa0 list flex-auto flex">
                                        <dt className="w-third" style={{ marginLeft: '-1px', marginTop: '-1px', paddingBottom: '2px' }}><input className="pa1 ma0 nl1 w-100" type="text" defaultValue={metaPair.key}/></dt>
                                        <dd className="w-two-thirds pa0" style={{ marginLeft: '39px', marginTop: '-1px', paddingBottom: '2px' }}><input className="pa1 ma0 nl1 w-100" type="text" defaultValue={metaPair.value}/></dd>
                                    </dl>
                                    {this.renderControls(metaPair)}
                                </li>
                            )
                        }
                    })}
                </ul>
                <div className="tr mt3">
                    <BasicButton className="button--positive" onClick={this.createMetaPair}>Add Metadata</BasicButton>
                </div>
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
