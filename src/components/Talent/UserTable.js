import React from 'react';

import classNames from 'classnames';

import { Table, Thead, Th, Tr, Td } from 'reactable';

import BasicButton from '../Buttons/BasicButton';

import userData from '../../data/users.json';

class UserList extends React.Component {
    constructor() {
        super();

        this.renderUserRow = this.renderUserRow.bind(this);
        this.renderUserCell = this.renderUserCell.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.commonCellClasses = 'pa3';

        this.state = {};
    }

    renderNewUserRow() {
        const inputClasses = 'w-100 pa1 ';

        return (
            <Tr className="mt0">
                {this.renderUserCell('avatar', '', 'pv1')}
                {this.renderUserCell('name', (
                    <input
                        className={inputClasses}
                        type="text"
                        placeholder="Name"
                    />
                ), 'pv2')}
                {this.renderUserCell('email', (
                    <input
                        className={inputClasses}
                        type="email"
                        placeholder="Email"
                    />
                ), 'pv2')}
                {this.renderUserCell('phone', (
                    <input
                        className={inputClasses}
                        type="tel"
                        placeholder="Phone"
                    />
                ), 'pv2')}
                {this.renderUserCell('actions', <BasicButton className="button--positive">Create</BasicButton>, 'pv1')}
            </Tr>
        )
    }

    renderUserRow(user) {
        const userClasses = classNames({
            'pointer ph3 pa2 mt0 hover-bg-black-10': true
        });

        return (
            <Tr key={user.id} className={userClasses} onClick={() => this.props.onClick(user.id)}>
                {this.renderUserCell('avatar', (
                    <img className="w1 h1 br-100 v-btm" src="http://placehold.it/40x40"/>
                ), 'tc pr0')}
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
                {this.renderUserCell('email', user.email)}
                {this.renderUserCell('phone', user.phone)}
                {this.renderUserCell('actions', '')}
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
                {value}
            </Td>
        );
    }

    renderHeaderCell(column, value) {
        const cellClasses = classNames({
            'tl bg-blue-yonder white bb bw1 b--white-40': true,
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
            'bg-white ba b--black-20 sh-shadow-2 ': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                <Table className="w-100" cellSpacing="0" sortable={['name']}>
                    <Thead>
                        {this.renderHeaderCell('avatar', '')}
                        {this.renderHeaderCell('name', 'Name')}
                        {this.renderHeaderCell('email', 'Email')}
                        {this.renderHeaderCell('phone', 'Phone')}
                        {this.renderHeaderCell('actions', '')}
                    </Thead>
                    {(this.props.inlineAddingRowIsOpen) ? this.renderNewUserRow() : null}
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
