import * as React from 'react'
import SecondaryMenu from '../Global/SecondaryMenu'

interface Section {
    key: any
    name: string
    content: React.ReactNode
}

interface Props {
    sections: Section[]
    className?: string
    secondaryMenuClassName?: string
}

interface State {
    activeSectionIndex: number
}

export default class SectionSwitcher extends React.Component<Props, State> {
    public static defaultProps = {
        className: '',
        secondaryMenuClassName: ''
    }
    constructor() {
        super()
        this.state = {
            activeSectionIndex: 0
        }
    }

    setActiveSection = (sectionKey: any) => {
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
