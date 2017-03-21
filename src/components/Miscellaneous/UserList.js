const React      = require('react');
const classNames = require('classnames');

const userData = require('../../data/users.json');

class UserList extends React.Component {
    constructor() {
        super();

        this.renderUserRow = this.renderUserRow.bind(this);

        this.state = {};
    }

    renderUserRow(user) {
        const userClasses = classNames({
            'ph3 pa2 mt0': true
        });

        return (
            <li className={userClasses}>
                {user.firstName + ' ' + user.lastName}
            </li>
        );
    }

    render() {
        const wrapperClasses = classNames({
            'bg-white ba b--black-20 br1 sh-shadow-2': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                <ol className="pa0 list ma0">
                    {userData.map((user) => this.renderUserRow(user))}
                </ol>
            </div>
        )
    }
}

UserList.defaultProps = {
    className: ''
};

module.exports = UserList;