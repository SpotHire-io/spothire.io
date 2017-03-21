const React      = require('react');
const classNames = require('classnames');

const userData = require('../../data/users.json');

const Table = require('reactable').Table;
const Thead = require('reactable').Thead;
const Th    = require('reactable').Th;
const Tr    = require('reactable').Tr;
const Td    = require('reactable').Td;

class UserList extends React.Component {
    constructor() {
        super();

        this.renderUserRow = this.renderUserRow.bind(this);
        this.renderUserCell = this.renderUserCell.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.commonCellClasses = 'pa3';

        this.state = {};
    }

    renderUserRow(user) {
        const userClasses = classNames({
            'ph3 pa2 mt0 hover-bg-black-10': true
        });

        return (
            <Tr className={userClasses}>
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
                {this.renderUserCell('email', user.email)}
                {this.renderUserCell('phone', user.phone)}
            </Tr>
        );
    }

    renderUserCell(column, value) {
        const cellClasses = classNames({
            'bb b--black-20': true,
            [this.commonCellClasses]: true
        });

        return (
            <Td
                column={column}
                className={cellClasses}
            >
                {value}
            </Td>
        );
    }

    renderHeaderCell(column, value) {
        const cellClasses = classNames({
            'tl bg-blue-yonder washed-yellow bb bw1 b--white-40': true,
            [this.commonCellClasses]: true
        });

        return (
            <Th
                column={column}
                className={cellClasses}
            >
                {value}
            </Th>
        );
    }

    render() {
        const wrapperClasses = classNames({
            'bg-white ba b--black-20 br1 sh-shadow-2 app-sans': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                <Table className="w-100" cellSpacing="0">
                    <Thead>
                        {this.renderHeaderCell('name', 'Name')}
                        {this.renderHeaderCell('email', 'Email')}
                        {this.renderHeaderCell('phone', 'Phone')}
                    </Thead>
                    {userData.map((user) => this.renderUserRow(user))}
                </Table>
            </div>
        )
    }
}

UserList.defaultProps = {
    className: ''
};

module.exports = UserList;