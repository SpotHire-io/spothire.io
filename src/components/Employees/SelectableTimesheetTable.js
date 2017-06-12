import 'moment/locale/en-ca';
import 'moment-duration-format';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox } from 'rebass';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import { CSSTransitionGroup } from 'react-transition-group';
import PersonSchema from '../../schemas/Person';

// import userData from '../../data/people.json';

class SelectableTimesheetTable extends React.Component {
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
        this.props.onUpdateSelectedUsers(selectedUserIds);
    }

    selectAllUsers() {
        const allUserIds = this.props.users.map((user) => user.id);

        this.setState({ selectedUserIds: allUserIds });
        this.props.onUpdateSelectedUsers(allUserIds);
    }

    unselectAllUsers() {
        this.setState({ selectedUserIds: [] });
        this.props.onUpdateSelectedUsers([]);
    }

    renderUserRow(user) {
        const userClasses = classNames({
            'ph3 pa2 mt0 hover-bg-black-10 pointer': true,
            'bg-washed-red': user.hours.submitted > user.hours.worked,
            'bg-washed-yellow': user.hours.submitted < user.hours.worked,
        });

        return (
            <Tr key={user.id} className={userClasses} onClick={() => this.toggleUser(user.id)}>
                {this.renderUserCell('avatar', () => {
                    let innerContent;

                    if (this.state.selectedUserIds.indexOf(user.id) === -1) {
                        innerContent = (<img key={'image-' + user.id} className="db w1 h1 br-100 v-btm" src={user.imageSrc} alt="inner content"/>);
                    } else {
                        innerContent = (<Checkbox key={'checkbox-' + user.id} theme="success" style={{ display: 'inline' }} checked label="" name="" onClick={(e) => e.stopPropagation()}/>);
                    }

                    return (
                        <CSSTransitionGroup
                            transitionName="animation__image-checkbox"
                            transitionEnterTimeout={150}
                            transitionLeaveTimeout={150}
                            className="sh-rebass-checkbox-mr0 relative w1 h1"
                            component="div"
                        >
                            {innerContent}
                        </CSSTransitionGroup>
                    );
                }, 'pr0 no-select')}
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
                {this.renderUserCell('hours_worked', moment.duration(user.hours.worked, 'hours').format('h:mm'))}
                {this.renderUserCell('hours_submitted', moment.duration(user.hours.submitted, 'hours').format('h:mm'))}
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
                {(typeof value === 'string') ? value : value()}
            </Td>
        );
    }

    renderHeaderCell(column, value, className) {
        const cellClasses = classNames({
            'tl bg-teal white bb bw1 b--white-40': true,
            [this.commonCellClasses]: true,
            [className]: true
        });

        return (
            <Th
                column={column}
                className={cellClasses}
            >
                {(typeof value === 'string') ? value : value()}
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
                <Table {...this.props.tableProps} style={{ width: 'calc(100% + 1px)' }} cellSpacing="0" sortable={['name']}>
                    <Thead>
                    {this.renderHeaderCell('avatar', () => {
                        if (this.state.selectedUserIds.length === this.props.users.length) {
                            return (<div className="sh-rebass-checkbox-mr0"><Checkbox theme="white" style={{ display: 'inline' }} checked label="" name="" onClick={() => this.unselectAllUsers()}/></div>);
                        } else {
                            return (<div className="sh-rebass-checkbox-mr0"><Checkbox theme="white" style={{ display: 'inline' }} label="" name=""  onClick={() => this.selectAllUsers()}/></div>);
                        }
                    }, 'w1')}
                    {this.renderHeaderCell('name', 'Name', '')}
                    {this.renderHeaderCell('hours_worked', 'Hours Worked', '')}
                    {this.renderHeaderCell('hours_submitted', 'Hours Submitted', '')}
                    </Thead>
                    {this.props.users.map((user) => this.renderUserRow(user))}
                </Table>
            </div>
        )
    }
}

SelectableTimesheetTable.defaultProps = {
    className: '',
    hasShadow: true,
    tableProps: {},
    onUpdateSelectedUsers: (selectedUserIds) => console.log(selectedUserIds)
};

SelectableTimesheetTable.propTypes = {
    className: PropTypes.string,
    users: PropTypes.arrayOf(PersonSchema).isRequired,
    hasShadow: PropTypes.bool,
    tableProps: PropTypes.object,
    onUpdateSelectedUsers: PropTypes.func,
};

export default SelectableTimesheetTable;
