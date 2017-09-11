import React from 'react';
import classNames from 'classnames';

/**
 * Purely presentational component to visually connect two `Box`es.
 *
 * This connector should only be used when the two `Box`es are related (e.g. a search
 * form and the search results). `props.isActive` should be used to signal when this
 * relation is "active" (e.g. search term is entered and the results displayed).
 */
const BoxConnector = ({ className, isActive }) => (
    <div className={classNames('mh5 animate-all bl br bt-0 bb-0', className, {
        'bw1 b--black-20': isActive,
        'b--black-10': ! isActive,
    })}/>
);

BoxConnector.defaultProps = {
    className: 'h1',
};

export default BoxConnector;
