import * as React from 'react'
import * as classNames from 'classnames'
import Box from '../../Global/Box'
import {Group} from '../../../schemas'

interface Props {
    className?: string
    group: Group
    displayAvatarPreview?: boolean
}

export default class Card extends React.Component<Props, {}> {
    public static defaultProps = {
        className: '',
        displayAvatarPreview: true,
    };

    constructor() {
        super();

        this.renderAvatarPreview = this.renderAvatarPreview.bind(this);
    }

    renderAvatarPreview() {
        const groupEmployees = this.props.group.employees;

        const largeImageSize = 80;
        const smallImageSize = 60;
        const insetMargin = 15;

        const commonImageClasses = 'relative br-pill bw1 ba b--silver';

        const sideImageCommonInlineStyles = {
            height: `${smallImageSize}px`,
            width: `${smallImageSize}px`,
            bottom: `${(largeImageSize - smallImageSize) / 2}px`,
        };

        return (
            <div className="relative">
                <img
                    className={commonImageClasses}
                    style={{
                        ...sideImageCommonInlineStyles,
                        left: `${insetMargin}px`
                    }}
                    src="https://randomuser.me/api/portraits/women/0.jpg"
                    alt={`Profile of ${groupEmployees[0].firstName} ${groupEmployees[0].lastName}`}
                />
                <img
                    className={classNames(commonImageClasses, 'z-1')}
                    style={{
                        height: `${largeImageSize}px`,
                        width: `${largeImageSize}px`,
                    }}
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt={`Profile of ${groupEmployees[1].firstName} ${groupEmployees[1].lastName}`}
                />
                <img
                    className={commonImageClasses}
                    style={{
                        ...sideImageCommonInlineStyles,
                        right: `${insetMargin}px`
                    }}
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt={`Profile of ${groupEmployees[2].firstName} ${groupEmployees[2].lastName}`}
                />
            </div>
        );
    }

    render() {
        const wrapperClasses = classNames({
            'tc': true,
            [this.props.className]: true
        });

        return (
            <Box className={wrapperClasses} contentWrapperClassName="pv4 ph3">
                <h2 className="mt0">{this.props.group.name}</h2>

                {(this.props.displayAvatarPreview) ? this.renderAvatarPreview() : null}

                <p className="gray mt3">{this.props.group.employees.length} {(this.props.group.employees.length > 1) ? 'employees' : 'employee'}</p>
            </Box>
        );
    }
}
