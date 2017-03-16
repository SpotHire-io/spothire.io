const React      = require('react');
const classNames = require('classnames');

class Filter extends React.Component {
    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        let output;

        switch (this.props.type) {
            case 'text':
                output = (
                    <input type="text" value={this.props.data.value} placeholder={this.props.data.placeholder} onChange={this.props.onChange}/>
                );
        }

        return (
            <div className={wrapperClasses}>
                {output}
            </div>
        );
    }
};

Filter.defaultProps = {
    type: 'text',
    className: ''
};

module.exports = Filter;
