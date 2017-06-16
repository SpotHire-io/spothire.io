import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UserTable from '../../UserTable';

class SelectIndividuals extends React.Component {
    constructor() {
        super();

        this.state = {
            employeesSearch: '',
        }
    }

    render() {
        return (
            <div className={classNames('', this.props.className)}>
                <p>Select individual employees to add.</p>

                <p>
                    <label className="f6 db" htmlFor="employees_search">Search employees</label>
                    <input className="mt2 w-100" type="text" id="employees_search" aria-describedby="employees_search_desc" name="employees_search" value={this.state.employeesSearch} onChange={(e) => this.setState({ employeesSearch: e.target.value })}/>
                    <small className="dib f6 black-60 lh-title mt2" id="employees_search_desc">Narrow down the employees by searching their details.</small>
                </p>

                <p className="f6 mt3 mb2">Employees</p>

                <UserTable
                    tableProps={{
                        filterable: ['name'],
                        hideFilterInput: true,
                        filterBy: this.state.employeesSearch,
                    }}
                    enabledColumns={['avatar', 'name']}
                    onClickUser={this.props.onAddUser}
                />
            </div>
        );
    }
}

SelectIndividuals.defaultProps = {
    className: '',
    onAddUser: (userId) => alert(`Adding employee #${userId}`),
};

SelectIndividuals.propTypes = {
    className: PropTypes.string,
    onAddUser: PropTypes.func.isRequired,
};

export default SelectIndividuals;
