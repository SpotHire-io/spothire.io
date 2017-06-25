import Icon from '../../../libraries/react-geomicons'
import * as React from 'react';
import * as classNames from 'classnames';
import BasicButton from '../../components/Buttons/BasicButton';
import * as Select from 'react-select';
import {MetaPairs, Metadata, Person, MetadataType} from '../../schemas'


interface Props {
    className?: string
    employee: Person
}

interface State {
    metaPairs: MetaPairs
    currentlyEditingMetaPairId: number
}

const metaTypes = [
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

export default class MetadataInterface extends React.Component<Props, State> {
    public static defaultProps = {
        className: ''
    }

    constructor(props: Props) {
        super();

        this.toggleEditingMetaPair = this.toggleEditingMetaPair.bind(this);

        this.deleteMetaPair = this.deleteMetaPair.bind(this);
        this.createMetaPair = this.createMetaPair.bind(this);
        this.updateMetaPairFieldByIndex = this.updateMetaPairFieldByIndex.bind(this);

        this.renderMetaPairValueEditor = this.renderMetaPairValueEditor.bind(this);

        this.setState({
            currentlyEditingMetaPairId: null,
            metaPairs: props.employee.metadata
        });
    }

    toggleEditingMetaPair(metaPairId: number) {
        let currentlyEditingMetaPairId = this.state.currentlyEditingMetaPairId;

        // Unset the currently editing metaPair if we’re toggling that metaPair. Else, set to the new metaPair ID.
        if (metaPairId === currentlyEditingMetaPairId) {
            currentlyEditingMetaPairId = null;
        } else {
            currentlyEditingMetaPairId = metaPairId;
        }

        return this.setState({ currentlyEditingMetaPairId });
    }

    deleteMetaPair(metaPairKey: string) {
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

    updateMetaPairFieldByIndex(metaPairIndex: number, field: string, value: string) {
        let metaPairs: any = [...this.state.metaPairs];
        metaPairs[metaPairIndex][field] = value;

        return this.setState({ metaPairs });
    }

    renderControls(metaPair: Metadata) {
        return (
            <div className="tr self-center ml2">
                <Icon color="#555555" name={(metaPair.id !== this.state.currentlyEditingMetaPairId) ? 'compose' : 'check'} className="pointer mt1" onClick={() => this.toggleEditingMetaPair(metaPair.id)}/>
                <Icon color="#555555" name="close" className="pointer mt1 ml2" onClick={() => this.deleteMetaPair(metaPair.key)}/>
            </div>
        );
    }

    renderMetaPairValueEditor(metadata: Metadata, metadataIndex: number) {
        let metaPairValueEditor: JSX.Element;
        let metaTypeConfig = metaTypes.find((metaType) => metaType.type === metadata.type);

        switch (metadata.type) {
            case 'string':
            case 'number':
                metaPairValueEditor = <input className="pa1 ma0 nl1 w-100" type={metaTypeConfig.type} value={metadata.value} onChange={(e) => this.updateMetaPairFieldByIndex(metadataIndex, 'value', e.target.value)} placeholder="value"/>;
                break;
            case 'boolean':
                metaPairValueEditor = <input className="pa1 ma0 nl1 w-100" type="checkbox" checked={!!metadata.value} onChange={(e) => this.updateMetaPairFieldByIndex(metadataIndex, 'value', String(e.target.checked))}/>;
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
                                                onChange={(newType: {value: string, label: string}) => this.updateMetaPairFieldByIndex(index, 'type', newType.value)}
                                                options={metaTypes.map((type) => {
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
