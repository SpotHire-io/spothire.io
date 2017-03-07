const React = require('react');

class MainMenu extends React.Component {
    render() {
        return (
            <div className="flex">
                <p className="b f4 pv3 ph4 ma0 lh-solid dib ba b--near-white fl">SpotHire</p>
                <nav className="fl flex-auto flex">
                    <div className="w-20 ba b--near-white justify-center inline-flex">
                        <a className="self-center" href="#">Me</a>
                    </div>
                    <div className="w-20 ba b--near-white justify-center inline-flex">
                        <a className="self-center" href="#">Newsfeed</a>
                    </div>
                    <div className="w-20 ba b--near-white justify-center inline-flex">
                        <a className="self-center" href="#">People</a>
                    </div>
                    <div className="w-20 ba b--near-white justify-center inline-flex">
                        <a className="self-center" href="#">Schedule</a>
                    </div>
                    <div className="w-20 ba b--near-white justify-center inline-flex">
                        <a className="self-center" href="#">Timesheet</a>
                    </div>
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
