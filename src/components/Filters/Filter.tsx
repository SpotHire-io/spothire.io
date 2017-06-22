import 'react-select/dist/react-select.css';
import * as React from 'react';
import * as Select from 'react-select';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

interface Props {
    className?: string
    id: string
    type: 'text' | 'select'
    label?: string
    data?: any
    onChange: React.EventHandler<any>
}

const Filter: React.StatelessComponent<Props> = ({ id, label, type, data, onChange, className }) => {
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
    default:
    }

    return (
        <div className={wrapperClasses}>
            {
                (label !== undefined && label.length !== 0)
                    ? <label className="db mb2 f6" htmlFor={id}>{label}</label>
                    : null
            }
            {output}
        </div>
    );
};
