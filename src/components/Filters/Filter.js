import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Select from 'react-select';

import 'react-select/dist/react-select.css';

const Filter = ({ id, label, type, data, onChange, className }) => {
    let wrapperClasses = classNames({
        'mt3 ': true,
        [className]: true
    });

    let output;

    switch (type) {
        case 'text':
            output = (
                <input
                    id={id}

                    type="text"

                    className="w-100 pa1 mt0"

                    value={data.value}
                    placeholder={data.placeholder}
                    onChange={onChange}
                />
            );
            break;

        case 'select':
            output = (
                <Select
                    id={id}

                    className="mt0"

                    options={data.options}
                    onChange={onChange}
                    {...data.selectConfig}
                />
            );
            break;
    }

    return (
        <div className={wrapperClasses}>
            {
                (typeof label != 'undefined' && label.length !== 0)
                    ? <label className="db mb2 f6" htmlFor={id}>{label}</label>
                    : null
            }
            {output}
        </div>
    );
};

Filter.defaultProps = {
    className: ''
};

Filter.propTypes = {
    id: PropTypes.string.isRequired
};

export default Filter;
