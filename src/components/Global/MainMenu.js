const React      = require('react');
const classNames = require('classnames');

class MainMenu extends React.Component {
    constructor() {
        super();

        this.renderNavLink = this.renderNavLink.bind(this);

        this.commonItemWrapperClasses = 'bg-blue-yonder washed-yellow pv3 ph4 bb bw1 b--white-40';
    }

    renderNavLink(linkText, isSelected, isLast) {
        const aClasses = classNames({
            [this.commonItemWrapperClasses]: true,
            'w-20 tc link dim': true,
            'hover-bl hover-br bw1': isSelected,
        });

        return (
            <a key={linkText} className={aClasses} href="#">{linkText}</a>
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
            <div className="flex app-sans">
                <div className={this.commonItemWrapperClasses}>
                    <p className="b ma0 lh-solid">SpotHire</p>
                </div>
                <nav className="flex-auto flex items-start">
                    {
                        menuItems.map((text, index) => this.renderNavLink(text, false, menuItems.length === index + 1))
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
