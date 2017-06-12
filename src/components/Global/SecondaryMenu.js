import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SecondaryMenu extends React.Component {
    constructor() {
        super();

        this.renderNavItem = this.renderNavItem.bind(this);
    }

    renderNavItem(item) {
        const aClasses = classNames({
            'b near-black hover-gray dib pv3 mr4 no-underline animate-all bb bw1 hover-b--white-40': true,
            'b--teal': ! item.isActive,
            'b--white-40': item.isActive
        });

        return (
            <a
                key={item.key}
                onClick={() => this.props.onClick(item.key)}
                href={item.href}
                className={aClasses}
                style={{marginBottom:'-0.125rem'}}
            >
                {item.text}
            </a>
        )
    }

    render() {
        const wrapperClasses = classNames({
            'bb bw1 b--teal': true,
            [this.props.className]: true
        });

        return (
            <nav className={wrapperClasses}>
                {this.props.items.map((item) => this.renderNavItem(item))}
            </nav>
        );
    }
}

SecondaryMenu.defaultProps = {
    className: ''
};

SecondaryMenu.propTypes = {
    items: PropTypes.array.isRequired
};

export default SecondaryMenu;
