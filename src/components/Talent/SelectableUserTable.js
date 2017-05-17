const React      = require('react');
const classNames = require('classnames');

const userData = require('../../data/users.json');

const Table = require('reactable').Table;
const Thead = require('reactable').Thead;
const Th    = require('reactable').Th;
const Tr    = require('reactable').Tr;
const Td    = require('reactable').Td;

const BasicButton = require('../Buttons/BasicButton');

import { Checkbox } from 'rebass';

class SelectableUserTable extends React.Component {
    constructor() {
        super();

        this.renderUserRow = this.renderUserRow.bind(this);
        this.renderUserCell = this.renderUserCell.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.toggleUser = this.toggleUser.bind(this);
        this.selectAllUsers = this.selectAllUsers.bind(this);
        this.unselectAllUsers = this.unselectAllUsers.bind(this);

        this.commonCellClasses = 'pa3';

        this.state = {
            selectedUserIds: []
        };
    }

    toggleUser(userId) {
        const selectedUserIds = [...this.state.selectedUserIds];

        if (this.state.selectedUserIds.indexOf(userId) === -1) {
            selectedUserIds.push(userId);
        } else {
            selectedUserIds.splice(selectedUserIds.indexOf(userId), 1);
        }

        this.setState({ selectedUserIds });
    }

    selectAllUsers() {
        const allUserIds = this.props.users.map((user) => user.id);

        return this.setState({ selectedUserIds: allUserIds });
    }

    unselectAllUsers() {
        return this.setState({ selectedUserIds: [] });
    }

    renderUserRow(user) {
        const userClasses = classNames({
            'ph3 pa2 mt0 hover-bg-black-10 pointer': true
        });

        return (
            <Tr key={user.id} className={userClasses} onClick={() => this.toggleUser(user.id)}>
                {this.renderUserCell('avatar', () => {
                    if (this.state.selectedUserIds.indexOf(user.id) === -1) {
                        return (<img className="w1 h1 br-100 v-btm" src="http://placehold.it/40x40" />);
                    } else {
                        return (<div className="sh-rebass-checkbox-mr0"><Checkbox theme="success" style={{ display: 'inline' }} checked label="" name=""/></div>);
                    }
                }, 'pr0')}
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
            </Tr>
        );
    }

    renderUserCell(column, value, className) {
        const cellClasses = classNames({
            'bb b--black-20': true,
            [this.commonCellClasses]: true,
            [className]: true
        });

        return (
            <Td
                column={column}
                className={cellClasses}
            >
                {(typeof value == 'string') ? value : value()}
            </Td>
        );
    }

    renderHeaderCell(column, value, className) {
        const cellClasses = classNames({
            'tl bg-blue-yonder white bb bw1 b--white-40': true,
            [this.commonCellClasses]: true,
            [className]: true
        });

        return (
            <Th
                column={column}
                className={cellClasses}
            >
                {(typeof value == 'string') ? value : value()}
            </Th>
        );
    }

    render() {
        const wrapperClasses = classNames({
            'bg-white ba b--black-20 sh-shadow-2 ': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                <Table className="w-100" cellSpacing="0" sortable={['name']}>
                    <Thead>
                    {this.renderHeaderCell('avatar', () => {
                        if (this.state.selectedUserIds.length === this.props.users.length) {
                            return (<div className="sh-rebass-checkbox-mr0"><Checkbox theme="white" style={{ display: 'inline' }} checked label="" name="" onClick={() => this.unselectAllUsers()}/></div>);
                        } else {
                            return (<div className="sh-rebass-checkbox-mr0"><Checkbox theme="white" style={{ display: 'inline' }} label="" name=""  onClick={() => this.selectAllUsers()}/></div>);
                        }
                    }, 'w1')}
                    {this.renderHeaderCell('name', 'Name', '')}
                    </Thead>
                    {this.props.users.map((user) => this.renderUserRow(user))}
                </Table>
            </div>
        )
    }
}

SelectableUserTable.defaultProps = {
    className: '',
    users: userData
};

export default SelectableUserTable;