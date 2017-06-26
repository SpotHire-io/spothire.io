import * as React from 'react';
import * as classNames from 'classnames';
import { Checkbox } from 'rebass';
const { Table, Thead, Th, Tr, Td } = require('reactable');
import { CSSTransitionGroup } from 'react-transition-group';
import { Person } from '../../schemas';
const userData = require('../../data/people.json');


const commonCellClasses = 'pa3'

interface Props {
    className?: string
    users: Person[]
    hasShadow?: boolean
}

interface State {
    selectedUserIds: any[]
}

export default class SelectableUserTable extends React.Component<Props, State> {
    public static defaultProps = {
        className: '',
        users: userData,
        hasShadow: true
    }
    constructor() {
        super();

        this.renderUserRow = this.renderUserRow.bind(this);
        this.renderUserCell = this.renderUserCell.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.toggleUser = this.toggleUser.bind(this);
        this.selectAllUsers = this.selectAllUsers.bind(this);
        this.unselectAllUsers = this.unselectAllUsers.bind(this);

        this.state = {
            selectedUserIds: []
        }
    }

    toggleUser(userId: number) {
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

    renderUserRow(user: Person) {
        const userClasses = classNames({
            'ph3 pa2 mt0 hover-bg-black-10 pointer': true
        });

        return (
            <Tr key={user.id} className={userClasses} onClick={() => this.toggleUser(user.id)}>
                {this.renderUserCell('avatar', () => {
                    let innerContent;

                    if (this.state.selectedUserIds.indexOf(user.id) === -1) {
                        innerContent = (<img key={'image-' + user.id} className='db w1 h1 br-100 v-btm' src={user.imageSrc} alt='inner content'/>);
                    } else {
                        innerContent = (<Checkbox key={'checkbox-' + user.id} theme='success' style={{ display: 'inline' }} checked label='' name='' onClick={(e: any) => e.stopPropagation()}/>);
                    }

                    return (
                        <CSSTransitionGroup
                            transitionName='animation__image-checkbox'
                            transitionEnterTimeout={150}
                            transitionLeaveTimeout={150}
                            className='sh-rebass-checkbox-mr0 relative w1 h1'
                            component='div'
                        >
                            {innerContent}
                        </CSSTransitionGroup>
                    );
                }, 'pr0 no-select')}
                {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
            </Tr>
        );
    }

    renderUserCell(column: string, value: any, className?: string) {
        const cellClasses = classNames({
            'bb b--black-20': true,
            [commonCellClasses]: true,
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

    renderHeaderCell(column: string, value: any, className?: string) {
        const cellClasses = classNames({
            'tl bg-teal white bb bw1 b--white-40': true,
            [commonCellClasses]: true,
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
                <Table className='w-100' cellSpacing='0' sortable={['name']}>
                    <Thead>
                    {this.renderHeaderCell('avatar', () => {
                        if (this.state.selectedUserIds.length === this.props.users.length) {
                            return (<div className='sh-rebass-checkbox-mr0'><Checkbox theme='default' style={{ display: 'inline' }} checked label='' name='' onClick={() => this.unselectAllUsers()}/></div>);
                        } else {
                            return (<div className='sh-rebass-checkbox-mr0'><Checkbox theme='default' style={{ display: 'inline' }} label='' name=''  onClick={() => this.selectAllUsers()}/></div>);
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
