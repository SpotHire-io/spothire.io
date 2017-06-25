import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as classNames from 'classnames'
const { Table, Thead, Th, Tr, Td } = require('reactable')
import Icon from '../../../libraries/react-geomicons'
import BasicButton from '../Buttons/BasicButton'
import {Person} from '../../schemas'

// JSON Data
const userData = require('../../data/people.json')

// storybook stuff
import { linkTo } from '@kadira/storybook';

interface Props {
    className?: string,
    hasShadow?: boolean,
    inlineAddingRowIsOpen?: boolean,
    editUser?: Function,
    deleteUser?: Function,
    onClickUser?: Function,
    users: Person[],
    tableProps?: object,
    enabledColumns: string[]
}

interface State {
}

const renderControls = (user: Person) =>
    <div className='tr'>
        <Icon color='#555555' name='compose' className='pointer' onClick={() => this.props.editUser(user.id)}/>
        <Icon color='#555555' name='close' className='pointer ml2' onClick={() => this.props.deleteUser(user.id)}/>
    </div>


export default class UserTable extends React.Component<Props, State> {
    public static defaultProps = {
        className: '',
        hasShadow: true,
        users: userData,
        inlineAddingRowIsOpen: false,
        tableProps: {},
        enabledColumns: ['avatar', 'name', 'email', 'phone', 'actions']
    };

    constructor(props: Props) {
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
                {this.renderUserCell('name', () => (
                    <input
                        className={inputClasses}
                        type='text'
                        placeholder='Name'
                    />
                ), 'pv2')}
                {this.renderUserCell('email', () => (
                    <input
                        className={inputClasses}
                        type='email'
                        placeholder='Email'
                    />
                ), 'pv2')}
                {this.renderUserCell('phone', () => (
                    <input
                        className={inputClasses}
                        type='tel'
                        placeholder='Phone'
                    />
                ), 'pv2')}
                {this.renderUserCell('actions', () =>
                    <BasicButton
                        className='button--positive'
                        onClick={() => linkTo('Views (manager)', 'People:EmployeeSingleView')}>
                        Create
                    </BasicButton>, 'pv1')}
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

    renderUserRow(user: Person) {
        const userClasses = classNames({
            'pointer ph3 pa2 mt0 hover-bg-black-10': true
        });

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

    renderUserCell(column: string, value: string | React.ReactNode, className?: string) {
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

    renderHeaderCell(column: string, value: string | React.ReactNode) {
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
                    {/*{(this.props.inlineAddingRowIsOpen) ? this.renderNewUserRow() : null}*/}
                    {(this.props.users.length > 0) ? this.props.users.map((user) => this.renderUserRow(user)) : this.renderNoUsersRow()}
                </Table>
            </div>
        )
    }
}
