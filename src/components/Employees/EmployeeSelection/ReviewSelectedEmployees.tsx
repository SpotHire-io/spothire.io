const Icon = require('react-geomicons');
import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Selection {
    id: string
}

interface Category {
    title: string
    key: string
    selections: Selection[]
    renderMethod(selection: Selection, className: string): any
}

interface Props {
    className?: string
    selectionCategories: any
    unSelectById(key: string, id: string): any
}

interface State {

}

export default class ReviewSelectedEmployees extends React.Component<Props, State> {
    constructor() {
        super();

        this.renderSelections = this.renderSelections.bind(this);
        this.renderEmptySelectionsMessage = this.renderEmptySelectionsMessage.bind(this);
    }

    renderSelections(category: Category) {
        return (
            <ul className="list pa0 ma0">
                {category.selections.map((selection) => {
                    return (
                        <li key={selection.id} className="mt0 flex">
                            {category.renderMethod(selection, 'flex-auto')}
                            <div className="tr">
                                <Icon color="#555555" name="close" className="pointer" onClick={() => this.props.unSelectById(category.key, selection.id)}/>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )
    }

    renderEmptySelectionsMessage(category: Category) {
        return (
            <p className="mt0 i">No {category.title.toLowerCase()} provided.</p>
        )
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.props.selectionCategories.map((category: Category) => {
                    return (
                        <section className="mb3" key={category.key}>
                            <h4 className="f6 normal mt0 mb2">{category.title}</h4>

                            {(category.selections.length > 0) ? this.renderSelections(category) : this.renderEmptySelectionsMessage(category)}
                        </section>
                    );
                })}
            </div>
        );
    }
}