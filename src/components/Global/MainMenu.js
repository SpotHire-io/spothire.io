const React      = require('react');
const classNames = require('classnames');

class MainMenu extends React.Component {
    renderNavLink(linkText, isLast) {
        const aClasses = classNames({
            'w-20 tc f6 w-100 bt bb bw1 b--deep-koamaru bg-blue-yonder washed-yellow link dim': true,
            'br br--dotted': ! isLast,
            'br': isLast,
        });

        return (
            <a className={aClasses} href="#">{linkText}</a>
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
            <div className="flex pt-sans">
                <p className="b bg-blue-yonder washed-yellow f4 pv3 ph4 ma0 lh-solid ba bw1 b--deep-koamaru">SpotHire</p>
                <nav className="flex-auto flex items-center">
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
