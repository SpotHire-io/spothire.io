const React      = require('react');
const classNames = require('classnames');

const Filter = ({ type, data, onChange, className }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    });

    let output;

    switch (type) {
        case 'text':
            output = (
                <input type="text" value={data.value} placeholder={data.placeholder} onChange={onChange}/>
            );
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
