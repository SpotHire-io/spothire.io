import React from 'react';

import classNames from 'classnames';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class MainMenu extends React.Component {
    constructor() {
        super();

        this.renderLogo = this.renderLogo.bind(this);
        this.renderNavLink = this.renderNavLink.bind(this);
        this.renderUserMenu = this.renderUserMenu.bind(this);
        this.toggleUserMenu = this.toggleUserMenu.bind(this);

        this.commonItemWrapperClasses = 'white pv3 ph4';

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
            <div className={this.commonItemWrapperClasses}>
                <img src="/img/logo-white.svg" alt="SpotHire logo" className="h1 v-mid"/>
            </div>
        );
    }

    renderNavLink(linkText, isSelected) {
        const aClasses = classNames({
            [this.commonItemWrapperClasses]: true,
            'w-20 tc link dim pointer': true,
            'i sh-inset-shadow-1': isSelected,
        });

        return (
            <a key={linkText} className={aClasses} href="#" onClick={linkTo('Views', linkText)}>{linkText}</a>
        )
    }

    renderUserMenu() {
        const userMenuClasses = classNames({
            ' absolute z-999 right-2 w4 bg-white shadow-4 bb bl br b--black-20 br--bottom br1': true,
            'dn': ! this.state.isUserMenuOpen,
            'db': this.state.isUserMenuOpen
        });

        const userMenuItems = [
            'Profile',
            'Log out',
        ];

        return (
            <div className={userMenuClasses}>
                <ul className="list ph0 pv1 ma0">
                    {
                        userMenuItems.map((text) => (
                            <li className="mt0" key={text}>
                                <a
                                    href="#"
                                    className="pa2 db no-underline near-black hover-bg-blue-yonder hover-white"
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
            <div className="relative no-select">
                <div className="flex  shadow-4 bg-blue-yonder bb bt bw1 b--white-40" onClick={() => (this.state.isUserMenuOpen) ? this.toggleUserMenu() : null}>
                    {this.renderLogo()}
                    <nav className="flex-auto flex items-start">
                        {
                            menuItems.map((text) => this.renderNavLink(text, text === this.props.selectedItem))
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

MainMenu.defaultProps = {
    className: '',
    selectedItem: 'Dashboard'
};

export default MainMenu;
