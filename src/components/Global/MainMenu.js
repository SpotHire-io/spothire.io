const React      = require('react');
const classNames = require('classnames');

class MainMenu extends React.Component {
    renderNavLink(linkText, isLast) {
        const aClasses = classNames({
            'f6 pv3 w-100 bt bb bw1 b--near-white sh-bg-sea-blue-gradient white link dim': true,
            'br br--dotted': ! isLast,
            'br': isLast,
        });

        return (
            <div className="w-20 inline-flex items-start tc">
                <a className={aClasses} href="#">{linkText}</a>
            </div>
        )
    }

    render() {
        const menuItems = [
            'Dashboard',
            'Newsfeed',
            'People',
            'Schedule',
            'Timesheet',
        ];

        return (
            <div className="flex avenir">
                <p className="b sh-bg-true-blue white f4 pv3 ph4 ma0 lh-solid ba bw1 b--near-white">SpotHire</p>
                <nav className="flex-auto flex">
                    {
                        menuItems.map((text, index) => this.renderNavLink(text, menuItems.length === index + 1))
                    }
                </nav>
            </div>
        )
    }
}

MainMenu.defaultProps = {
    className: '',
    menuItems: []
};

module.exports = MainMenu;
