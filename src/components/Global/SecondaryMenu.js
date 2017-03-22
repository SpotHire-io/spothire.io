const React      = require('react');
const classNames = require('classnames');

class SecondaryMenu extends React.Component {
    constructor() {
        super();

        this.renderNavItem = this.renderNavItem.bind(this);
    }

    renderNavItem(item) {
        return (
            <a className="b near-black hover-gray dib pv3 ph1 mh1 no-underline animate-all bb bw1 b--blue-yonder hover-b--white-40" href={item.href} style={{marginBottom:'-0.125rem'}}>{item.text}</a>
        )
    }

    render() {
        return (
            <nav className="bb bw1 b--blue-yonder ph3 app-sans">
                {this.props.items.map((item) => this.renderNavItem(item))}
            </nav>
        );
    }
}

SecondaryMenu.defaultProps = {
    className: ''
};

SecondaryMenu.propTypes = {
    items: React.PropTypes.array.isRequired
};

module.exports = SecondaryMenu;
