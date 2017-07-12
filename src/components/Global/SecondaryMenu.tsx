import * as React from 'react'
import * as classNames from 'classnames'

interface Item {
    key?: any
    href?: string
    text?: React.ReactNode
    isActive?: boolean
}

interface Props {
    className?: string
    items: Item[]
    onClick: React.EventHandler<React.MouseEvent<{}>>
}

interface State {

}

/**
 * Secondary section menu.
 *
 * Provides navigation for a given section.
 */
export default class SecondaryMenu extends React.Component<Props, State> {
    public static defaultProps = {
        className: ''
    }
    renderNavItem = (item: Item) => {
        const aClasses = classNames({
            'b near-black hover-gray dib pv3 mr4 no-underline animate-all bb bw1 hover-b--white-40': true,
            'b--teal': ! item.isActive,
            'b--white-40': item.isActive
        })

        return (
            <a
                key={item.key}
                onClick={() => this.props.onClick(item.key)}
                href={item.href}
                className={aClasses}
                style={{marginBottom:'-0.125rem'}}
            >
                {item.text}
            </a>
        )
    }

    render() {
        const wrapperClasses = classNames({
            'bb bw1 b--teal': true,
            [this.props.className]: true
        })

        return (
            <nav className={wrapperClasses}>
                {this.props.items.map((item: Item) => this.renderNavItem(item))}
            </nav>
        )
    }
}
