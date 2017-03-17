const React      = require('react');
const classNames = require('classnames');

const Select = require('react-select');

import 'react-select/dist/react-select.css';

const Filter = ({ id, label, type, data, onChange, className }) => {
    let wrapperClasses = classNames({
        'mt3 app-sans': true,
        [className]: true
    });

    let output;

    switch (type) {
        case 'text':
            output = (
                <input
                    id={id}

                    type="text"

                    className="w-100 pa1 app-sans"

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
                    ? <label className="db mb1 f6 b" htmlFor={id}>{label}</label>
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
    id: React.PropTypes.string.isRequired
};

module.exports = Filter;
