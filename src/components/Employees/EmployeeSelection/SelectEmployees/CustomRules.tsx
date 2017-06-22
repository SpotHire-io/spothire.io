import 'react-select/dist/react-select.css';
import * as React from 'react';
import * as Select from 'react-select';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import {BasicButton} from '../../../Buttons';

// Rule data
import filterKeys from '../../../../data/peopleFilterRules/filterKeys.json';
import filterTypes from '../../../../data/peopleFilterRules/filterTypes.json';

type FilterKeys = FilterKey[]
interface FilterKey {
    label: string
    value: string
    disabled?: boolean
}

type FilterTypes = FilterType[]
interface FilterType {
    label: string
    value: string
}

interface Props {
    className?: string
    onAddRule?: Function
}

interface State {
    selectedKey: string
    filterType: FilterType
    filterValue: string
    currentSelectionCategoryKey: string
}

export default class SelectCustomRules extends React.Component<Props, State> {
    public filterKeys: FilterKeys
    public filterTypes: FilterTypes
    public static defaultProps: Props = {
        className: '',
        onAddRule: (rule: any) => alert(rule)
    };

    constructor() {
        super();

        this.clearRule = this.clearRule.bind(this);
        this.addRule = this.addRule.bind(this);

        this.renderValueInputs = this.renderValueInputs.bind(this);
        this.renderPlainLanguageDescription = this.renderPlainLanguageDescription.bind(this);
        this.renderControls = this.renderControls.bind(this);

        this.filterKeys = filterKeys;
        this.filterTypes = filterTypes;

        this.setState({
            selectedKey: null,
            filterType: null,
            filterValue: '',
        });
    }

    clearRule() {
        // reset state to initial values
        this.setState({
            selectedKey: null,
            filterType: null,
            filterValue: '',
        });
    }

    addRule() {
        this.props.onAddRule({
            key: this.state.selectedKey,
            type: this.state.filterType.value,
            value: this.state.filterValue,
        });
    }

    renderValueInputs() {
        if (this.state.selectedKey === null) {
            return null;
        }

        const categoryFilters: any = {
            text: ['equals', 'contains'],
            number: ['greater', 'equals', 'less'],
        };

        const categoryValueTypes: any = {
            text: 'text',
            number: 'number',
        };

        const currentCategory = this.state.selectedKey.split('-')[1];

        return (
            <div className="mt3">
                <div>
                    <label htmlFor="custom_filter_type" className="db mb2 f6">Filter type</label>
                    <Select
                        name="custom_filter_type"
                        value={this.state.filterType}
                        onChange={(newFilterType: FilterType) => this.setState({ filterType: newFilterType })}
                        options={this.filterTypes.filter((filterType: FilterType) => categoryFilters[currentCategory].includes(filterType.value))}
                    />
                    <small className="dib f6 black-60 lh-title mt2">
                        The type of filtering you want to do.
                    </small>
                </div>
                <div className="mt3">
                    <label htmlFor="custom_value" className="db mb2 f6">Value</label>
                    <input className="w-100 db" type={categoryValueTypes[currentCategory]} id="custom_value" name="custom_value" value={this.state.filterValue} onChange={(e) => this.setState({ filterValue: e.target.value })}/>
                    <small className="dib f6 black-60 lh-title mt2">
                        The value you want to match against.
                    </small>
                </div>
            </div>
        );
    }

    renderPlainLanguageDescription() {
        if (this.state.selectedKey !== null && this.state.filterType !== null) {
            const currentFilterType = this.filterTypes.find((filterType) => filterType.value === this.state.filterType.value);
            const currentFilterKey = this.filterKeys.find((filterKey) => filterKey.value === this.state.selectedKey);

            return (
                <div className="bt bb-0 br-0 bl-0 b--dotted mt3 pt3">
                    <p>
                        This rule will find all employees with <em>{currentFilterKey.label}</em> that <em>{currentFilterType.label}</em> {(this.state.filterValue.length > 0) ? `“${this.state.filterValue}”.` : '…'}
                    </p>
                    <p className="f6">This is approximately {[10, 20, 30][Math.floor(Math.random()*3)]} employees.</p>
                </div>
            );
        }
    }

    renderControls() {
        return (
            <div className="tr">
                {(this.state.selectedKey !== null || this.state.filterType !== null || this.state.filterValue.length > 0)
                    ? <BasicButton className="mt3 button--negative" onClick={() => this.clearRule()}>Clear Rule</BasicButton>
                    : null
                }

                {(this.state.selectedKey !== null && this.state.filterType !== null && this.state.filterValue.length > 0)
                    ? <BasicButton className="ml2 mt3 button--positive" onClick={() => this.addRule()}>Add Rule</BasicButton>
                    : null
                }
            </div>
        );
    }

    render() {
        return (
            <div className={classNames('', this.props.className)}>
                <p>Create custom rules to add all employees that match.</p>

                <div className="mt3">
                    <label className="db mb2 f6" htmlFor="custom_key">Key</label>
                    <Select
                        name="custom_key"
                        className="mt0"
                        value={this.state.selectedKey}
                        options={this.filterKeys}
                        onChange={(newKey: {value: string}) => (newKey !== null) ? this.setState({ selectedKey: newKey.value, filterType: null }) : this.setState({ selectedKey: null, filterType: null })}
                    />
                    <small className="dib f6 black-60 lh-title mt2">
                        The key you want to filter on. This can be a profile field, filled out by the employee, or a custom
                        metadata key, set by a manager.
                    </small>
                </div>

                {this.renderValueInputs()}
                {this.renderPlainLanguageDescription()}
                {this.renderControls()}
            </div>
        );
    }
}
