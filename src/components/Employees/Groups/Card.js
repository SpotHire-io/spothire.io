import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../../Global/Box';
import GroupSchema from '../../../schemas/Group';

class GroupCard extends React.Component {
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

GroupCard.defaultProps = {
    className: '',
    displayAvatarPreview: true,
};

GroupCard.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
    displayAvatarPreview: PropTypes.bool,
};

export default GroupCard;
