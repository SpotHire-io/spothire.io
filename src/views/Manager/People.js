import React from 'react';
import PropTypes from 'prop-types';
import GroupListView from './People/GroupList';
import SectionSwitcher from '../../components/Miscellaneous/SectionSwitcher';
import EmployeeListView from './People/EmployeeList';

/**
 * Wrapper view for the people and group list views.
 */
class PeopleView extends React.Component {
    render() {
        return (
            <div>
                <SectionSwitcher
                    className="pb4 bg-near-white"
                    secondaryMenuClassName="ph4 bg-white"
                    sections={[
                        {
                            key: 'employees',
                            name: 'Employees',
                            content: (
                                <EmployeeListView employees={this.props.employees}/>
                            )
                        },
                        {
                            key: 'groups',
                            name: 'Groups',
                            content: (
                                <GroupListView
                                    groups={[...Array(10).keys()].map((number) => {
                                        return {
                                            id: number,
                                            name: `Sample Group ${number + 1}`,
                                            employees: this.props.employees
                                        };
                                    })}
                                />
                            )
                        }
                    ]}
                />
            </div>
        );
    }
}

PeopleView.defaultProps = {

};

// PeopleView.propTypes = {
//     employees: PropTypes.arrayOf(PersonSchema).isRequired
// };

export default PeopleView;
