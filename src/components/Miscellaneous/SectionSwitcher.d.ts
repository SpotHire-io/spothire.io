import * as React from 'react'

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

export default class SectionSwitcher extends React.Component<Props, State> {}
