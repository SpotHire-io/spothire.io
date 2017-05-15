import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../../schemas/Group';

import classNames from 'classnames';

import Box from '../../Global/Box';

class GroupCard extends React.Component {
    constructor() {
        super();

        this.renderAvatarPreview = this.renderAvatarPreview.bind(this);
    }

    renderAvatarPreview() {
        const groupTalent = this.props.group.talent;

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
                    alt={`Profile picture of ${groupTalent[0].firstName} ${groupTalent[0].lastName}`}
                />
                <img
                    className={classNames(commonImageClasses, 'z-1')}
                    style={{
                        height: `${largeImageSize}px`,
                        width: `${largeImageSize}px`,
                    }}
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt={`Profile picture of ${groupTalent[1].firstName} ${groupTalent[1].lastName}`}
                />
                <img
                    className={commonImageClasses}
                    style={{
                        ...sideImageCommonInlineStyles,
                        right: `${insetMargin}px`
                    }}
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt={`Profile picture of ${groupTalent[2].firstName} ${groupTalent[2].lastName}`}
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
            <Box className={wrapperClasses}>
                <h2 className="mt0">{this.props.group.name}</h2>

                {this.renderAvatarPreview()}

                <p className="gray mt3">{this.props.group.talent.length} talent</p>
            </Box>
        );
    }
}

GroupCard.defaultProps = {
    className: '',
};

GroupCard.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupCard;
