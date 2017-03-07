const React = require('react');

class MainMenu extends React.Component {
    renderNavLink(linkText) {
        return (
            <div className="w-20 inline-flex items-start tc">
                <a className="f6 pv3 w-100 bt bb bw1 b--near-white sh-bg-sea-blue white link dim" href="#">{linkText}</a>
            </div>
        )
    }

    render() {
        return (
            <div className="flex avenir">
                <p className="b sh-bg-true-blue white f4 pv3 ph4 ma0 lh-solid ba bw1 b--near-white">SpotHire</p>
                <nav className="flex-auto flex">
                    {
                        [
                            'Dashboard',
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
