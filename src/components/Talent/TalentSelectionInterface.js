import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import BasicButton from '../../components/Buttons/BasicButton';

import Icon from 'react-geomicons';

class TalentSelectionInterface extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <div className="flex">
                    <div className="w-50 mr">
                        <h3 className="mt0 f6 lh-title ttu">Select Talents</h3>
                    </div>
                    <div className="w-50">
                        <h3 className="mt0 f6 lh-title ttu">Selected Talents</h3>
                    </div>
                </div>

                <div className="tr">
                    <BasicButton className="button--positive">Add Talents</BasicButton>
                </div>
            </div>
        );
    }
}

TalentSelectionInterface.defaultProps = {
    className: '',
};

TalentSelectionInterface.propTypes = {
    className: PropTypes.string,
    talents: PropTypes.arrayOf(PersonSchema).isRequired,
};

export default TalentSelectionInterface;
