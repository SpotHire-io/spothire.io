import React from 'react';

import PropTypes from 'prop-types';

import SecondaryMenu from '../Global/SecondaryMenu';

class SectionSwitcher extends React.Component {
    constructor() {
        super();

        this.setActiveSection = this.setActiveSection.bind(this);
        this.resetActiveSection = this.resetActiveSection.bind(this);

        this.state = {
            activeSectionIndex: 0
        }
    }

    setActiveSection(sectionKey) {
        const activeSectionIndex = this.props.sections.findIndex((section) => section.key === sectionKey);

        return this.setState({ activeSectionIndex });
    }

    resetActiveSection() {
        return this.setState({ activeSectionIndex: 0 });
    }

    render() {
        return (
            <div className={this.props.className}>
                <SecondaryMenu
                    className={this.props.secondaryMenuClassName}
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
                {this.props.sections[this.state.activeSectionIndex].content}
            </div>
        );
    }
}

SectionSwitcher.defaultProps = {
    className: '',
    secondaryMenuClassName: ''
};

SectionSwitcher.propTypes = {
    sections: PropTypes.array.isRequired
};

export default SectionSwitcher;
