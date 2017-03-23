const React      = require('react');
const classNames = require('classnames');

const SecondaryMenu = require('../Global/SecondaryMenu');

class SectionSwitcher extends React.Component {
    constructor() {
        super();

        this.state = {
            activeSectionIndex: 0
        }
    }

    render() {
        return (
            <div>
                <SecondaryMenu
                    className="ph4"
                    items={this.props.sections.map((section) => {
                        return {
                            text: section.name,
                            href: '#' + section.key
                        };
                    })}
                />
                <div className="pa4 bg-near-white">
                    {this.props.sections[this.state.activeSectionIndex].content}
                </div>
            </div>
        );
    }
}

SectionSwitcher.propTypes = {
    sections: React.PropTypes.array.isRequired
};

module.exports = SectionSwitcher;
