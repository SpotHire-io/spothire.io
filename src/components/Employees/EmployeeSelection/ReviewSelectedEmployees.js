import Icon from '../../../../libraries/react-geomicons'
import React from 'react';

/**
 * Walks through the provided categories to display selected employees, including the ability to unselect employees.
 */
const ReviewSelectedEmployees = ({ className, selectionCategories, unSelectById, selectedEmployees }) => {
    const renderSelections = category => {
        return (
            <ul className="list pa0 ma0">
                {category.selections.map((selection) => {
                    return (
                        <li key={selection.id} className="mt0 flex">
                            {category.renderMethod(selection, 'flex-auto')}
                            <div className="tr">
                                <Icon color="#555555" name="close" className="pointer" onClick={() => unSelectById(category.key, selection.id)}/>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )
    }

    const renderEmptySelectionsMessage = category => {
        return (
            <p className="mt0 i">No {category.title.toLowerCase()} provided.</p>
        )
    }

    return (
        <div className={className}>
            {selectionCategories.map(category => {
                return (
                    <section className="mb3" key={category.key}>
                        <h4 className="f6 normal mt0 mb2">{category.title}</h4>

                        {(category.selections.length > 0) ? renderSelections(category) : renderEmptySelectionsMessage(category)}
                    </section>
                );
            })}
        </div>
    );
}

export default ReviewSelectedEmployees;
