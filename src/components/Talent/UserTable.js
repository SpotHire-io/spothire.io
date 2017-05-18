import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import { Table, Thead, Th, Tr, Td } from 'reactable';

import BasicButton from '../Buttons/BasicButton';

import Icon from 'react-geomicons';

import userData from '../../data/users.json';

class UserList extends React.Component {
    constructor() {
        super();

        this.renderUserRow = this.renderUserRow.bind(this);
        this.renderUserCell = this.renderUserCell.bind(this);
        this.renderControls = this.renderControls.bind(this);
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
            <Tr key={user.id} className={userClasses} onClick={() => this.props.onClickUser(user.id)}>
                {this.renderUserCell('avatar', () => (
                    <img className="w1 h1 br-100 v-btm" src="http://placehold.it/40x40"/>
                ), 'tc pr0')}
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
                {this.renderUserCell('email', user.email)}
                {this.renderUserCell('phone', user.phone)}
                {this.renderUserCell('actions', () => this.renderControls(user))}
            </Tr>
        );
    }

    renderUserCell(column, value, className) {
        const cellClasses = classNames({
            'bb b--black-20': true,
            'dn': ! this.props.enabledColumns.includes(column),
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

    renderControls(user) {
        return (
            <div className="tr">
                <Icon color="#555555" name="compose" className="pointer" onClick={() => this.props.editUser(user.id)}/>
                <Icon color="#555555" name="close" className="pointer ml2" onClick={() => this.props.deleteUser(user.id)}/>
            </div>
        );
    }

    renderHeaderCell(column, value) {
        const cellClasses = classNames({
            'tl bg-blue-yonder white bb bw1 b--white-40': true,
            'dn': ! this.props.enabledColumns.includes(column),
            [this.commonCellClasses]: true
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
                <Table {...this.props.tableProps} style={{ width: 'calc(100% + 1px)' }} cellSpacing="0" sortable={['name']}>
                    <Thead>
                        {this.renderHeaderCell('avatar', '')}
                        {this.renderHeaderCell('name', 'Name')}
                        {this.renderHeaderCell('email', 'Email')}
                        {this.renderHeaderCell('phone', 'Phone')}
                        {this.renderHeaderCell('actions', '')}
                    </Thead>
                    {(this.props.inlineAddingRowIsOpen) ? this.renderNewUserRow() : null}
                    {this.props.users.map((user) => this.renderUserRow(user))}
                </Table>
            </div>
        )
    }
}

UserList.defaultProps = {
    className: '',
    users: userData,
    inlineAddingRowIsOpen: false,
    tableProps: {},
    enabledColumns: ['avatar', 'name', 'email', 'phone', 'actions'],
};

UserList.propTypes = {
    className: PropTypes.string,
    inlineAddingRowIsOpen: PropTypes.bool,
    editUser: PropTypes.func,
    deleteUser: PropTypes.func,
    onClickUser: PropTypes.func,
    users: PropTypes.arrayOf(PersonSchema),
    tableProps: PropTypes.object,
    enabledColumns: PropTypes.array,
};

export default UserList;
