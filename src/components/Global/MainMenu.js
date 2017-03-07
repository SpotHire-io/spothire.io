const React = require('react');

class MainMenu extends React.Component {
    renderNavLink(linkText) {
        return (
            <div className="w-20 ba b--near-white justify-center inline-flex">
                <a className="self-center" href="#">{linkText}</a>
            </div>
        )
    }

    render() {
        return (
            <div className="flex">
                <p className="b f4 pv3 ph4 ma0 lh-solid dib ba b--near-white fl">SpotHire</p>
                <nav className="fl flex-auto flex">
                    {
                        [
                            'Me',
                            'Newsfeed',
                            'People',
                            'Schedule',
                            'Timesheet',
                        ].map((text) => this.renderNavLink(text))
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
