import * as React from 'react'
import * as classNames from 'classnames'
import Box from '../../Global/Box'
import {Group} from '../../../schemas'

interface Props {
    className?: string
    group: Group
    displayAvatarPreview?: boolean
}

/**
 * Display quick overview of a group's details in card format (a Box).
 */
const Card: React.StatelessComponent<Props> = ({ className = '', displayAvatarPreview = true, group }) => {
    const renderAvatarPreview = () => {
        const groupEmployees = group.employees;

        const largeImageSize = 80;
        const smallImageSize = 60;
        const insetMargin = 15;

        const commonImageClasses = 'relative br-pill bw1 ba b--silver';

        const sideImageCommonInlineStyles = {
            height: `${smallImageSize}px`,
            width: `${smallImageSize}px`,
            bottom: `${(largeImageSize - smallImageSize) / 2}px`,
        };

        // @TODO: These images should come from the people attached to the group
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

    const wrapperClasses = classNames({
        'tc': true,
        [className]: true
    });

    return (
        <Box className={wrapperClasses} contentWrapperClassName="pv4 ph3">
            <h2 className="mt0">{group.name}</h2>

            {(displayAvatarPreview) ? renderAvatarPreview() : null}

            <p className="gray mt3">{group.employees.length} {(group.employees.length > 1) ? 'employees' : 'employee'}</p>
        </Box>
    );
}

export default Card;
