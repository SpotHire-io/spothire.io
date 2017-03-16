const React      = require('react');
const classNames = require('classnames');

const Filter = ({ type, data, onChange, className }) => {
    let wrapperClasses = classNames({
        'mt2': true,
        [className]: true
    });

    let output;

    switch (type) {
        case 'text':
            output = (
                <input
                    type="text"

                    className="w-100 pa1 pt-sans"

                    value={data.value}
                    placeholder={data.placeholder}
                    onChange={onChange}
                />
            );
            break;

        case 'select':
            output = (
                <select value={data.currentlySelectedId} onChange={onChange}>
                    {
                        data.options.map((option) => {
                            return <option key={option.id} value={option.id}>{option.text}</option>
                        })
                    }
                </select>
            );
            break;
    }

    return (
        <div className={wrapperClasses}>
            {output}
        </div>
    );
};

Filter.defaultProps = {
    className: ''
};

module.exports = Filter;
