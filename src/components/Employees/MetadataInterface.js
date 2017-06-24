import Icons from '../Icons';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PersonSchema from '../../schemas/Person';
import BasicButton from '../../components/Buttons/BasicButton';
import Select from 'react-select';

class MetadataInterface extends React.Component {
    constructor(props) {
        super();

        this.toggleEditingMetaPair = this.toggleEditingMetaPair.bind(this);

        this.deleteMetaPair = this.deleteMetaPair.bind(this);
        this.createMetaPair = this.createMetaPair.bind(this);
        this.updateMetaPairFieldByIndex = this.updateMetaPairFieldByIndex.bind(this);

        this.renderMetaPairValueEditor = this.renderMetaPairValueEditor.bind(this);

        this.metaTypes = [
            {
                type: 'string',
                label: 'String',
                input: 'text',
            },
            {
                type: 'number',
                label: 'Number',
                input: 'number',
            },
            {
                type: 'boolean',
                label: 'Yes/No',
                input: 'checkbox',
            },
        ];

        this.state = {
            currentlyEditingMetaPairId: null,
            metaPairs: props.employee.metadata
        };
    }

    toggleEditingMetaPair(metaPairId) {
        let currentlyEditingMetaPairId = this.state.currentlyEditingMetaPairId;

        // Unset the currently editing metaPair if we’re toggling that metaPair. Else, set to the new metaPair ID.
        if (metaPairId === currentlyEditingMetaPairId) {
            currentlyEditingMetaPairId = null;
        } else {
            currentlyEditingMetaPairId = metaPairId;
        }

        return this.setState({ currentlyEditingMetaPairId });
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
            return Math.max(currentHighestId, metaPair.id);
        }, -1);

        metaPairs.push({
            id: highestId + 1,
            key: '',
            type: 'string',
            value: ''
        });

        return this.setState({ metaPairs, currentlyEditingMetaPairId: highestId + 1 });
    }

    updateMetaPairFieldByIndex(metaPairIndex, field, value) {
        let metaPairs = [...this.state.metaPairs];

        metaPairs[metaPairIndex][field] = value;

        return this.setState({ metaPairs });
    }

    renderControls(metaPair) {
        return (
            <div className="tr self-center ml2">
                <Icons color="#555555" name={(metaPair.id !== this.state.currentlyEditingMetaPairId) ? 'compose' : 'check'} className="pointer mt1" onClick={() => this.toggleEditingMetaPair(metaPair.id)}/>
                <Icons color="#555555" name="close" className="pointer mt1 ml2" onClick={() => this.deleteMetaPair(metaPair.key)}/>
            </div>
        );
    }

    renderMetaPairValueEditor(metaPair, metaPairIndex) {
        let metaPairValueEditor;
        let metaTypeConfig = this.metaTypes.find((metaType) => metaType.type === metaPair.type);

        switch (metaPair.type) {
            case 'string':
            case 'number':
                metaPairValueEditor = <input className="pa1 ma0 nl1 w-100" type={metaTypeConfig.type} value={metaPair.value} onChange={(e) => this.updateMetaPairFieldByIndex(metaPairIndex, 'value', e.target.value)} placeholder="value"/>;
                break;
            case 'boolean':
                metaPairValueEditor = <input className="pa1 ma0 nl1 w-100" type="checkbox" checked={metaPair.value} onChange={(e) => this.updateMetaPairFieldByIndex(metaPairIndex, 'value', e.target.checked)}/>;
                break;
            default: break;
        }

        return metaPairValueEditor;
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <ul className="list ma0 pa0 bg-near-white bb b--black-20">
                    {this.state.metaPairs.map((metaPair, index) => {
                        if (metaPair.id !== this.state.currentlyEditingMetaPairId) {
                            return (
                                <li className="flex ph3 pv2 ma0 bt bl br b--black-20" key={metaPair.id}>
                                    <dl className="ma0 pa0 list flex-auto flex">
                                        <dt className="w-third">{metaPair.key}</dt>
                                        <dd className="w-two-thirds pa0">{metaPair.value}</dd>
                                    </dl>
                                    {this.renderControls(metaPair)}
                                </li>
                            )
                        } else {
                            return (
                                <li className="flex ph3 pv1 ma0 bt bl br b--black-20" key={metaPair.id}>
                                    <dl className="ma0 pa0 list flex-auto flex">
                                        <dt className="w-third mr2" style={{ marginLeft: '-1px', marginTop: '-1px', paddingBottom: '2px' }}>
                                            <input className="pa1 ma0 nl1 w-100" type="text" value={metaPair.key} onChange={(e) => this.updateMetaPairFieldByIndex(index, 'key', e.target.value)} placeholder="key"/>
                                        </dt>
                                        <dt className="w-third mr2" style={{ marginLeft: '-1px', marginTop: '-1px', paddingBottom: '2px' }}>
                                            <Select
                                                value={metaPair.type}
                                                clearable={false}
                                                onChange={(newType) => this.updateMetaPairFieldByIndex(index, 'type', newType.value)}
                                                options={this.metaTypes.map((type) => {
                                                    return {
                                                        value: type.type,
                                                        label: type.label,
                                                    };
                                                })}
                                            />
                                        </dt>
                                        <dd className="w-third pa0 ml0" style={{ marginTop: '-1px', paddingBottom: '2px' }}>
                                            {this.renderMetaPairValueEditor(metaPair, index)}
                                        </dd>
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

// MetadataInterface.propTypes = {
//     className: PropTypes.string,
//     employee: PersonSchema.isRequired,
// };

export default MetadataInterface;
