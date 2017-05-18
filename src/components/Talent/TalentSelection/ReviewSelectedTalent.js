import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../../schemas/Person';

import classNames from 'classnames';

import Icon from 'react-geomicons';

class ReviewSelectedTalent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.selectionCategories.map((category) => {
                    return (
                        <section className="mb3" key={category.key}>
                            <h4 className="f6 normal mt0 mb2">{category.title}</h4>

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
                        </section>
                    );
                })}
            </div>
        );
    }
}

ReviewSelectedTalent.defaultProps = {
    className: '',
};

ReviewSelectedTalent.propTypes = {
    className: PropTypes.string,
    unSelectById: PropTypes.func.isRequired,
    selectionCategories: PropTypes.object.isRequired,
};

export default ReviewSelectedTalent;
