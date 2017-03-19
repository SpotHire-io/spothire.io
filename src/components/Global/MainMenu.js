const React      = require('react');
const classNames = require('classnames');

class MainMenu extends React.Component {
    constructor() {
        super();

        this.renderNavLink = this.renderNavLink.bind(this);
        this.renderUserMenu = this.renderUserMenu.bind(this);

        this.commonItemWrapperClasses = 'washed-yellow pv3 ph4';

        this.state = {
            isUserMenuOpen: true
        };
    }

    renderNavLink(linkText, isSelected) {
        const aClasses = classNames({
            [this.commonItemWrapperClasses]: true,
            'w-20 tc link dim pointer': true,
            'i sh-inset-shadow-1': isSelected,
        });

        return (
            <a key={linkText} className={aClasses} href="#">{linkText}</a>
        )
    }

    renderUserMenu() {
        const userMenuClasses = classNames({
            'app-sans absolute right-2 w4 bg-white shadow-4 bb bl br b--black-20 br--bottom br1': true,
            'dn': ! this.state.isUserMenuOpen,
            'db': this.state.isUserMenuOpen
        });

        const userMenuItems = [
            'Profile',
            'Log out',
        ];

        return (
            <div className={userMenuClasses}>
                <ul className="list ph0 pv2 ma0">
                    {
                        userMenuItems.map((text) => (
                            <li key={text}>
                                <a
                                    href="#"
                                    className="pa2 db no-underline hover-bg-blue-yonder hover-washed-yellow"
                                >
                                    {text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
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
            <div className="relative">
                <div className="flex app-sans shadow-4 bg-blue-yonder bb bt bw1 b--white-40">
                    <div className={this.commonItemWrapperClasses}>
                        <p className="b ma0 lh-solid">SpotHire</p>
                    </div>
                    <nav className="flex-auto flex items-start">
                        {
                            menuItems.map((text, index) => this.renderNavLink(text, index === 1))
                        }
                    </nav>
                    <div className="flex items-center ph4">
                        <img className="w2 h2 br-100" src="http://placehold.it/200x200" alt="Avatar"/>
                    </div>
                </div>
                {this.renderUserMenu()}
            </div>
        )
    }
}

MainMenu.defaultProps = {
    className: '',
    menuItems: []
};

module.exports = MainMenu;
