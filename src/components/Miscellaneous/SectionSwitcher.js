import React from 'react'
import SecondaryMenu from '../Global/SecondaryMenu'

/**
 * Simple container for hiding multiple sections behind a menu.
 *
 * Provide sections via `props.sections`, and the menu will be automatically generated.
 *
 * Don’t use if you want to track the open section yourself; this component hides that state.
 * Also desn’t allow deeplinking.
 */
export default class SectionSwitcher extends React.Component {
    constructor() {
        super()
        this.state = {
            activeSectionIndex: 0
        }
    }

    setActiveSection = sectionKey => {
        const activeSectionIndex = this.props.sections.findIndex((section) => section.key === sectionKey)

        return this.setState({ activeSectionIndex })
    }

    resetActiveSection = () => {
        return this.setState({ activeSectionIndex: 0 })
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
                        }
                    })}
                    onClick={this.setActiveSection}
                />
                {this.props.sections[this.state.activeSectionIndex].content}
            </div>
        )
    }
}

SectionSwitcher.defaultProps = {
    className: '',
    secondaryMenuClassName: ''
}