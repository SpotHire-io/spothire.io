import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Table, Thead, Th, Tr, Td } from 'reactable'
import Icon from '../../../libraries/react-geomicons'
// storybook stuff; @TODO: Replace usage of linkTo with react-router Link
import { linkTo } from '@kadira/storybook';

// JSON Data
const userData = require('../../data/people.json')

/**
 * Lists provided users, allowing various management functions (selecting, editing, deleteing).
 *
 * Can select the columns displayed with `props.enabledColumns`.
 */
export default class UserTable extends React.Component {
    defaultProps = {
        className: '',
        hasShadow: true,
        users: userData,
        inlineAddingRowIsOpen: false,
        tableProps: {},
        enabledColumns: ['avatar', 'name', 'email', 'phone', 'actions']
    };

    constructor() {
        super();

        this.renderNewUserRow = this.renderNewUserRow.bind(this);
        this.renderNoUsersRow = this.renderNoUsersRow.bind(this);

        this.renderUserRow = this.renderUserRow.bind(this);
        this.renderUserCell = this.renderUserCell.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.state = {};
    }

    renderNewUserRow() {
        const inputClasses = 'w-100 pa1 ';

        return (
            <Tr className='mt0'>
                {this.renderUserCell('avatar', '', 'pv1')}
                {this.renderUserCell('name', (// @TODO: Store this value in state
                    <input
                        className={inputClasses}
                        type='text'
                        placeholder='Name'
                    />
                ), 'pv2')}
                {this.renderUserCell('email', (// @TODO: Store this value in state
                    <input
                        className={inputClasses}
                        type='email'
                        placeholder='Email'
                    />
                ), 'pv2')}
                {this.renderUserCell('phone', (// @TODO: Store this value in state
                    <input
                        className={inputClasses}
                        type='tel'
                        placeholder='Phone'
                    />
                ), 'pv2')}
                {this.renderUserCell('actions', (
                    <div className="tr" title="Invite employee">
                        {/* @TODO: Clicking this should create the new user via the API, inviting them, then redirect to their individual page */}
                        <Icon color='#555555' name='check' className='pointer v-mid' onClick={() => linkTo('Views (manager)', 'People:EmployeeSingleView')}/>
                    </div>
                ), 'pv1')}
            </Tr>
        )
    }

    renderNoUsersRow() {
        return (
            <Tr className='mt0'>
                {this.renderUserCell('avatar', '', 'pv1')}
                {this.renderUserCell('name', 'No users to list.', 'pv3 i')}
                {this.renderUserCell('email', '', 'pv2')}
                {this.renderUserCell('phone', '', 'pv2')}
                {this.renderUserCell('actions', '', 'pv1')}
            </Tr>
        );
    }

    renderUserRow(user) {
        const userClasses = classNames({
            'pointer ph3 pa2 mt0 hover-bg-black-10': true
        });

        const renderControls = (user) =>
            <div className='tr'>
                <Icon color='#555555' name='compose' className='pointer' onClick={() => this.props.editUser(user.id)}/>
                <Icon color='#555555' name='close' className='pointer ml2' onClick={() => this.props.deleteUser(user.id)}/>
            </div>

        return (
            <Tr key={user.id} className={userClasses} onClick={() => this.props.onClickUser(user.id)}>
                {this.renderUserCell('avatar',
                    <img className='w1 h1 br-100 v-btm' src={user.imageSrc} alt='avatar'/>
                , 'tc pr0')}
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
                {this.renderUserCell('email', user.email)}
                {this.renderUserCell('phone', user.phone)}
                {this.renderUserCell('actions', renderControls(user))}
            </Tr>
        );
    }

    renderUserCell(column, value, className) {
        const cellClasses = classNames({
            'pa3 bb b--black-20': true,
            'dn': ! this.props.enabledColumns.includes(column),
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
            'pa3 tl bg-teal white bb bw1 b--white-40': true,
            'dn': ! this.props.enabledColumns.includes(column),
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
            'bg-white ba b--black-20': true,
            'sh-shadow-2': this.props.hasShadow,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                <Table {...this.props.tableProps} style={{ width: 'calc(100% + 1px)' }} cellSpacing='0' sortable={['name']}>
                    <Thead>
                        {this.renderHeaderCell('avatar', '')}
                        {this.renderHeaderCell('name', 'Name')}
                        {this.renderHeaderCell('email', 'Email')}
                        {this.renderHeaderCell('phone', 'Phone')}
                        {this.renderHeaderCell('actions', '')}
                    </Thead>
                    {(this.props.inlineAddingRowIsOpen) ? this.renderNewUserRow() : null}
                    {(this.props.users.length > 0) ? this.props.users.map((user) => this.renderUserRow(user)) : this.renderNoUsersRow()}
                </Table>
            </div>
        )
    }
}
