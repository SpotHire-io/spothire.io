const React      = require('react');
const classNames = require('classnames');

const SecondaryMenu = require('../Global/SecondaryMenu');

class SectionSwitcher extends React.Component {
    constructor() {
        super();

        this.setActiveSection = this.setActiveSection.bind(this);

        this.state = {
            activeSectionIndex: 0
        }
    }

    setActiveSection(sectionKey) {
        const activeSectionIndex = this.props.sections.findIndex((section) => section.key === sectionKey);

        return this.setState({ activeSectionIndex });
    }

    render() {
        return (
            <div>
                <SecondaryMenu
                    className="ph4"
                    items={this.props.sections.map((section, index) => {
                        return {
                            key: section.key,
                            text: section.name,
                            href: '#' + section.key,
                            isActive: index === this.state.activeSectionIndex
                        };
                    })}
                    onClick={this.setActiveSection}
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
