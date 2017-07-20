import * as React from 'react';
import * as classNames from 'classnames';

// storybook stuff; @TODO: Replace usage of linkTo with react-router Link
import { linkTo } from '@kadira/storybook';

interface Props {
    className?: string
    selectedItem?: string
    userType?: 'manager' | 'employee'
}
interface State {
    isUserMenuOpen: boolean
}

const commonItemWrapperClasses = 'white pv3 ph4';

const menuItems = {
    employee: [
        'Dashboard',
        'Newsfeed',
        'Schedule',
    ],
    manager: [
        'Newsfeed',
        'People',
        'Schedule',
        'Timesheet',
    ],
};

/**
 * Main application menu.
 *
 * Sits at the top of almost every view, allowing navigation between the main sections.
 *
 * The menu items vary according to the user type. Both types see a
 * a user menu with links to their profile and to log out.
 */
export default class MainMenu extends React.Component<Props, State> {
    public static defaultProps = {
        className: '',
        selectedItem: 'Dashboard',
        userType: 'manager',
    };
    constructor() {
        super();

        this.renderLogo = this.renderLogo.bind(this);
        this.renderNavLink = this.renderNavLink.bind(this);
        this.renderUserMenu = this.renderUserMenu.bind(this);
        this.toggleUserMenu = this.toggleUserMenu.bind(this);

        this.state = {
            isUserMenuOpen: false
        };
    }

    toggleUserMenu() {
        let isUserMenuOpen = (this.state.isUserMenuOpen) ? false : true;

        this.setState({ isUserMenuOpen });
    }

    renderLogo() {
        return (
            <div className={commonItemWrapperClasses}>
                <img src="/img/logo-white.svg" alt="SpotHire logo" className="h1 v-mid pointer" onClick={() => linkTo('Overview', 'Welcome')}/>
            </div>
        );
    }

    renderNavLink(linkText: string, isSelected: boolean) {
        const aClasses = classNames({
            [commonItemWrapperClasses]: true,
            'w-20 tc link dim pointer': true,
            'i sh-inset-shadow-1': isSelected,
        });

        return (
            <a key={linkText} className={aClasses} href="#views" onClick={() => linkTo(`Views (${this.props.userType})`, linkText)}>{linkText}</a>
        )
    }

    renderUserMenu() {
        const userMenuClasses = classNames({
            ' absolute z-999 right-2 w4 bg-white shadow-4 bb bl br b--black-20 br--bottom br1': true,
            'dn': ! this.state.isUserMenuOpen,
            'db': this.state.isUserMenuOpen
        });

        const userMenuItems = [
            {
                text: 'Profile',
                onClick: linkTo(`Views (${this.props.userType})`, 'EmployeeProfileView'),
            },
            {
                text: 'Log out',
                onClick: () => console.log('Log out clicked!'), // @TODO: this should log the user out
            },
        ];

        return (
            <div className={userMenuClasses}>
                <ul className="list ph0 pv1 ma0">
                    {
                        userMenuItems.map((menuItem) => (
                            <li className="mt0" key={menuItem.text}>
                                <a
                                    href="#main"
                                    className="pa2 db no-underline near-black hover-bg-teal hover-white"
                                    onClick={() => menuItem.onClick}
                                >
                                    {menuItem.text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className={classNames('relative no-select', this.props.className)}>
                <div className="flex  shadow-4 bg-teal bb bt bw1 b--white-40" onClick={() => (this.state.isUserMenuOpen) ? this.toggleUserMenu() : null}>
                    {this.renderLogo()}
                    <nav className="flex-auto flex items-start">
                        {
                            menuItems[this.props.userType].map((text) => this.renderNavLink(text, text === this.props.selectedItem))
                        }
                    </nav>
                    <div className="flex items-center ph4">
                        <img className="w2 h2 br-100 pointer" onClick={() => this.toggleUserMenu()} src="http://placehold.it/200x200" alt="Avatar"/>
                    </div>
                </div>
                {this.renderUserMenu()}
            </div>
        )
    }
}
