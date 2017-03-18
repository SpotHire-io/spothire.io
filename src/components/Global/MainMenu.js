const React      = require('react');
const classNames = require('classnames');

class MainMenu extends React.Component {
    constructor() {
        super();

        this.renderNavLink = this.renderNavLink.bind(this);

        this.commonItemWrapperClasses = 'bg-blue-yonder washed-yellow pv3 ph4 bb bw1 b--white-40';
    }

    renderNavLink(linkText, isSelected) {
        const aClasses = classNames({
            [this.commonItemWrapperClasses]: true,
            'w-20 tc link dim pointer': true,
            'bl br bw1 i': isSelected,
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
                        menuItems.map((text, index) => this.renderNavLink(text, index === 1))
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
