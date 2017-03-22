const React      = require('react');
const classNames = require('classnames');

class SecondaryMenu extends React.Component {
    constructor() {
        super();

        this.renderNavItem = this.renderNavItem.bind(this);
    }

    renderNavItem(item) {
        return (
            <a className="link bb bw1 b--red hover-b--white-40" href={item.href}>{item.text}</a>
        )
    }

    render() {
        return (
            <nav className="bb bw1 b--blue-yonder ph3" style={{marginBottom: '-0.125rem'}}>
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
