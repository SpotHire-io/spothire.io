import React from 'react';

import PropTypes from 'prop-types';

import { storiesOf } from '@kadira/storybook';
import { action } from '@kadira/storybook';
import { WithNotes } from '@kadira/storybook-addon-notes';

import moment from 'moment';
import 'moment/locale/en-ca';

import { SingleDatePicker, DateRangePicker } from 'react-dates';

import { START_DATE } from 'react-dates/constants';

import BigCalendar from 'react-big-calendar';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

import PeopleView from '../views/Manager/People';
import EmployeeSingleView from '../views/Manager/People/EmployeeSingle';
import GroupSingleView from '../views/Manager/People/GroupSingle';
import ScheduleView from '../views/Manager/Schedule';
import OpportunitySingleView from '../views/Manager/Schedule/OpportunitySingle';
import TimesheetView from '../views/Manager/Timesheet';

import DashboardView from '../views/Employee/Dashboard';
import NewsfeedView from '../views/Employee/Newsfeed';
import EmployeeOpportunitySingleView from '../views/Employee/Schedule/OpportunitySingle';
import EmployeeProfileView from '../views/Employee/EmployeeProfile';



import MainMenu from '../components/Global/MainMenu';
import SecondaryMenu from '../components/Global/SecondaryMenu';
import Box from '../components/Global/Box';

import BasicButton from '../components/Buttons/BasicButton';
import RadioButton from '../components/Buttons/RadioButton';
import ButtonBar from '../components/Buttons/ButtonBar';

import Post from '../components/Newsfeed/Post';
import PostList from '../components/Newsfeed/PostList';

import FilterContainer from '../components/Filters/FilterContainer';
import Filter from '../components/Filters/Filter';

import OverviewCalendar from '../components/Scheduling/OverviewCalendar';
import OpportunityModal from '../components/Scheduling/OpportunityModal';
import ShiftManager from '../components/Scheduling/ShiftManager';

import UserTable from '../components/Employees/UserTable';
import SelectableUserTable from '../components/Employees/SelectableUserTable';
import EmployeeSelectionInterface from '../components/Employees/EmployeeSelectionInterface';
import SelectIndividuals from '../components/Employees/EmployeeSelection/SelectEmployees/Individuals';
import SelectGroups from '../components/Employees/EmployeeSelection/SelectEmployees/Groups';
import SelectCustomRules from '../components/Employees/EmployeeSelection/SelectEmployees/CustomRules';

import GroupCard from '../components/Employees/Groups/Card';
import GroupCardList from '../components/Employees/Groups/CardList';
import GroupDetailsEditor from '../components/Employees/Groups/DetailsEditor';

import AvailabilityEditor from '../components/Profile/AvailabilityEditor';
import TimeOffRequestList from '../components/Profile/TimeOffRequestList';
import NewTimeOffRequestModal from '../components/Profile/NewTimeOffRequestModal';

import ShiftList from '../components/Miscellaneous/ShiftList';
import SectionSwitcher from '../components/Miscellaneous/SectionSwitcher';

import '../../public/css/app.css';

import users from '../data/people.json';
import sampleEvents from '../data/events.json';
import timeOffRequests from '../data/timeOffRequests.json';

storiesOf('Overview', module)
    .add('Welcome', () => (
        <div className="ma4 ">
            <h1>Welcome!</h1>

            <p className="measure-narrow f4">This is the pattern library for the SpotHire application. It contains the separate
            blocks used to build the interface, and examples of them in action.</p>

            <p className="measure">The components are loosely categorized according to their function or where they’re used. Some
            components include notes in the bottom panel for usage instructions or to talk about what still needs doing.</p>

            <p className="measure">Unless you really want to dig into the nitty-gritty of each part of the app, the most
            interesting place to look will be the <code className="bg-light-gray pa1 br1 f6">Views</code> category, the
            second item in the menu on the left. There I’ve put together previews of how the components will sit together
            to build certain pages from our Information Architecture. You’ll have to navigate with the links on the left,
            because the main menu functionality isn’t set up yet.</p>

            <p className="measure">When looking through, keep in mind that things are still early stage. Quite a bit has
            yet to be completed, and what is posted here is still in progress. That said, there are a few questions for
            you to consider as you look through:</p>

            <ul>
                <li>Is the interface natural? Would an admin or employee be able to find their way around?</li>
                <li>Are any aspects of the interface confusing? How so?</li>
                <li>What does a more polished version of this look like?</li>
                <li>Does anything seem out of place or unnecessary?</li>
            </ul>

            <p className="measure">Thanks, and I look forward to talking more!</p>
        </div>
    ));

class MockApp extends React.Component {
    render() {
        return (
            <div>
                <MainMenu selectedItem={this.props.selectedMenuItem} userType={this.props.userType}/>
                {this.props.viewComponent}
            </div>
        );
    }
}

MockApp.propTypes = {
    selectedMenuItem: PropTypes.string.isRequired,
    viewComponent: PropTypes.element.isRequired,
    userType: PropTypes.oneOf(['manager', 'employee']).isRequired,
};

storiesOf('Views (manager)', module)
    .add('Newsfeed', () => (
        <MockApp
            selectedMenuItem="Newsfeed"
            userType="manager"
            viewComponent={
                <NewsfeedView
                    posts={
                        [
                            {...samplePost},
                            {...samplePost, id: 2, isRespondedTo: false},
                            {...samplePost, id: 3}
                        ]
                    }
                />
            }
        />
    ))
    .add('People', () => (
        <MockApp
            selectedMenuItem="People"
            userType="manager"
            viewComponent={
                <PeopleView
                    users={users}
                />
            }
        />
    ))
    .add('People:EmployeeSingleView', () => (
        <MockApp
            selectedMenuItem="People"
            userType="manager"
            viewComponent={
                <EmployeeSingleView
                    employee={users[1]}
                />
            }
        />
    ))
    .add('People:GroupSingleView', () => (
        <MockApp
            selectedMenuItem="People"
            userType="manager"
            viewComponent={
                <GroupSingleView
                    group={{
                        id: 0,
                        name: 'Sample Group',
                        employees: users
                    }}
                />
            }
        />
    ))
    .add('Schedule', () => (
        <MockApp
            selectedMenuItem="Schedule"
            userType="manager"
            viewComponent={
                <ScheduleView
                    events={sampleEvents}
                />
            }
        />
    ))
    .add('Schedule:OpportunitySingle', () => (
        <MockApp
            selectedMenuItem="Schedule"
            userType="manager"
            viewComponent={
                <OpportunitySingleView
                    opportunity={sampleEvents[0]}
                />
            }
        />
    ))
    .add('Timesheet', () => (
        <MockApp
            selectedMenuItem="Timesheet"
            userType="manager"
            viewComponent={
                <TimesheetView
                    users={users}
                />
            }
        />
    ))
    .add('EmployeeProfileView', () => (
        <MockApp
            selectedMenuItem=""
            userType="manager"
            viewComponent={
                <EmployeeProfileView
                    employee={users[1]}
                />
            }
        />
    ));

storiesOf('Views (employee)', module)
    .add('Dashboard', () => (
        <MockApp
            selectedMenuItem="Dashboard"
            userType="employee"
            viewComponent={
                <DashboardView
                    employee={users[0]}
                    events={sampleEvents.filter((event) => event.userId === 0)}
                />
            }
        />
    ))
    .add('Newsfeed', () => (
        <MockApp
            selectedMenuItem="Newsfeed"
            userType="employee"
            viewComponent={
                <NewsfeedView
                    posts={
                        [
                            {...samplePost},
                            {...samplePost, id: 2, isRespondedTo: false},
                            {...samplePost, id: 3}
                        ]
                    }
                />
            }
        />
    ))
    .add('Schedule', () => (
        <MockApp
            selectedMenuItem="Schedule"
            userType="employee"
            viewComponent={
                <ScheduleView
                    events={sampleEvents}
                />
            }
        />
    ))
    .add('Schedule:OpportunitySingle', () => (
        <MockApp
            selectedMenuItem="Schedule"
            userType="employee"
            viewComponent={
                <EmployeeOpportunitySingleView
                    opportunity={sampleEvents[0]}
                />
            }
        />
    ))
    .add('EmployeeProfileView', () => (
        <MockApp
            selectedMenuItem=""
            userType="employee"
            viewComponent={
                <EmployeeProfileView
                    employee={users[1]}
                />
            }
        />
    ));

storiesOf('Global', module)
    .add('MainMenu', () => (
        <WithNotes>
            <MainMenu/>
        </WithNotes>
    ))
    .add('SecondaryMenu', () => (
        <WithNotes>
            <SecondaryMenu
                items={[
                    {
                        text: 'Item 1',
                        href: '#item1'
                    },
                    {
                        text: 'Item 2',
                        href: '#item2'
                    },
                    {
                        text: 'Item 3',
                        href: '#item3'
                    }
                ]}
            />
        </WithNotes>
    ))
    .add('Box without title', () => (
        <WithNotes>
            <div className="ma4">
                <Box>
                    <p>Some test content in the Box.</p>
                </Box>
            </div>
        </WithNotes>
    ))
    .add('Box with title', () => (
        <WithNotes>
            <div className="ma4">
                <Box title="Box title">
                    <p>Some test content in the Box.</p>
                </Box>
            </div>
        </WithNotes>
    ));

storiesOf('Content', module)
    .add('Paragraph', () => (
        <WithNotes>
            <div className="ma4 ">
                <p>Just a paragraph. Nothing special.</p>
                <p>Put them one after the other, and they stack fine.</p>
                <p className="measure">Add the <code className="bg-light-gray pa1 br1 f6">.measure</code> class to constrain it to a reasonable width (works for any element). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores impedit ipsam laudantium modi mollitia placeat sunt vero voluptas. Ab, accusamus ad aliquam animi asperiores aspernatur consectetur, earum fuga ipsam iste laudantium, molestias nemo neque nisi nostrum nulla numquam provident quas reiciendis rem sint sit tenetur ut. Animi eius enim ipsa ipsam molestiae.</p>
            </div>
        </WithNotes>
    ))
    .add('Paragraph:Serif', () => (
        <WithNotes>
            <div className="ma4 app-serif">
                <p>Just a paragraph, nothing special.</p>
                <p>Use the <code className="bg-light-gray pa1 br1 f6">.app-serif</code> class to set it to our serif font family stack.</p>
                <p className="measure">Add the <code className="bg-light-gray pa1 br1 f6">.measure</code> class to constrain it to a reasonable width (works for any element). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores impedit ipsam laudantium modi mollitia placeat sunt vero voluptas. Ab, accusamus ad aliquam animi asperiores aspernatur consectetur, earum fuga ipsam iste laudantium, molestias nemo neque nisi nostrum nulla numquam provident quas reiciendis rem sint sit tenetur ut. Animi eius enim ipsa ipsam molestiae.</p>
            </div>
        </WithNotes>
    ))
    .add('Headings', () => (
        <WithNotes>
            <div className="ma4 ">
                <h1>Top-level heading</h1>

                <p>Should only ever contain the title of the page.</p>

                <h2>Middle-grade heading</h2>

                <p>Likely most common heading. Any first-class section.</p>

                <h3>Third-tier heading</h3>

                <p>If you need to divide up a first-class section.</p>
            </div>
        </WithNotes>
    ))
    .add('Lists', () => (
        <WithNotes>
            <div className="ma4 ">
                <p>Unordered:</p>

                <ul>
                    <li>An item</li>
                    <li>Another</li>
                    <li>A final</li>
                </ul>

                <p>Ordered:</p>

                <ol>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ol>

                <p>With longer content:</p>

                <ol>
                    <li className="measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eligendi, facere illo incidunt odit placeat quidem quod temporibus! Laboriosam, quidem.</li>
                    <li className="measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum ducimus odio perferendis voluptates voluptatibus. A dolorem error molestias nulla officia suscipit veniam. Animi architecto, assumenda culpa dolor eos non provident recusandae! Ab accusantium commodi consectetur dolorem esse et fuga id, ipsum magnam molestias obcaecati, odit quasi repudiandae tempora voluptatibus? Commodi earum ipsum iure perspiciatis quisquam? Aliquam amet beatae consectetur cumque delectus dolore dolores eaque, est explicabo, facere fugiat id illum iste libero magni, maxime molestiae nostrum omnis optio repellat similique suscipit tempora. Assumenda, autem debitis in nobis obcaecati odio placeat provident quae quidem recusandae rem sed totam ut vitae!</li>
                    <li className="measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, corporis dolorem id obcaecati veritatis voluptatum? Animi aperiam commodi corporis ex explicabo fuga fugiat id magni maiores maxime molestiae, nisi quidem, tenetur. At eveniet ex ipsam iste labore maiores maxime quam quas voluptatem voluptatibus? Architecto beatae doloremque esse excepturi, facilis magnam natus nemo soluta? Asperiores debitis, dolore eius eos excepturi illum iste labore molestiae nihil porro, similique soluta, ullam voluptas. Ad obcaecati quasi soluta sunt.</li>
                </ol>
            </div>
        </WithNotes>
    ));

storiesOf('Buttons', module)
    .add('BasicButton:Standard', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--standard">Add Employees</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('BasicButton:Neutral', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--neutral">Add Employees</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('BasicButton:Positive', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--positive">Add Employees</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('BasicButton:Negative', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--negative">Remove Employees</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('IconButton:Plus', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--positive button--with-icon button--icon-plus">Add Opportunity</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('IconButton:Minus', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--negative button--with-icon button--icon-minus">Delete Opportunity</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('RadioButton:Unselected', () => (
        <WithNotes>
            <div className="ma4">
                <RadioButton>Unselected</RadioButton>
            </div>
        </WithNotes>
    ))
    .add('RadioButton:Selected', () => (
        <WithNotes>
            <div className="ma4">
                <RadioButton checked>Selected</RadioButton>
            </div>
        </WithNotes>
    ))
    .add('ButtonBar', () => (
        <WithNotes>
            <ButtonBar className="ma4">
                <RadioButton>Unselected</RadioButton>
                <RadioButton>Stuck in the middle</RadioButton>
                <RadioButton checked>Selected</RadioButton>
            </ButtonBar>
        </WithNotes>
    ));

const samplePost = {
    id: 1,
    title: "A very cool post",
    content: (
        <div>
            <p className="mt0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus fugiat fugit, minus modi qui quod ratione repellat ut vero?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque enim, illo odio temporibus vitae voluptatem! Adipisci amet architecto at cum doloremque dolorum ducimus eveniet ex, facere iure libero molestiae non numquam quam rem sit ut vel? Animi aperiam assumenda consectetur dolore dolorem eaque ex exercitationem facilis labore natus obcaecati quisquam quos recusandae rem sint totam vero, voluptatum? Accusamus animi aperiam aspernatur at distinctio dolor ducimus eveniet facere, fugiat incidunt ipsa magnam maxime molestiae molestias, officiis pariatur perspiciatis praesentium, quisquam rem saepe sunt velit voluptas voluptatibus. Assumenda odio provident quidem recusandae repellat. Distinctio ducimus facere illum ipsam similique sit voluptatem.</p>
        </div>
    ),
    date: "2017-03-13T12:00:00-04:00",
    responseRequired: true,
    isRespondedTo: true,
};

const samplePostList = (className) => (
    <PostList
        className={className}
        posts={
            [
                {...samplePost},
                {...samplePost, id: 2, isRespondedTo: false},
                {...samplePost, id: 3}
            ]
        }
    />
);

storiesOf('Newsfeed', module)
    .add('Open Post', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <Post
                    post={samplePost}
                    isOpen={true}
                />
            </div>
        </WithNotes>
    ))
    .add('Closed Post with automatic excerpt', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <Post
                    post={samplePost}
                    isOpen={false}
                />
            </div>
        </WithNotes>
    ))
    .add('Closed Post with custom excerpt', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <Post
                    post={{
                        ...samplePost,
                        excerpt: (<p className="mt0">Custom short excerpt.</p>)
                    }}
                    isOpen={false}
                />
            </div>
        </WithNotes>
    ))
    .add('PostList', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                {samplePostList()}
            </div>
        </WithNotes>
    ))
    .add('Newsfeed', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <div className="flex">
                    {sampleFilterContainer('mr3 w-third self-start')}
                    {samplePostList('w-two-thirds')}
                </div>
            </div>
        </WithNotes>
    ));

const sampleFilterContainer = (className) => (
    <FilterContainer className={className}>
        <Filter
            id="text1"
            label="Other text filter"
            type="text"
            data={{
                placeholder: 'A text filter'
            }}
        />
        <Filter
            id="text2"
            label="Text filter"
            type="text"
            data={{
                placeholder: 'Another text filter'
            }}
        />
        <Filter
            id="select1"
            label="Single select"
            type="select"
            data={{
                inputProps: {
                    id: 'select1'
                },
                options: [
                    {
                        value: '1',
                        label: 'Option 1'
                    },
                    {
                        value: '2',
                        label: 'Option 2'
                    }
                ]
            }}
        />
        <Filter
            id="select2"
            label="Multi select"
            type="select"
            data={{
                inputProps: {
                    id: 'select2'
                },
                options: [
                    {
                        value: '1',
                        label: 'Option 1'
                    },
                    {
                        value: '2',
                        label: 'Option 2'
                    }
                ],
                selectConfig: {
                    multi: true
                }
            }}
        />
    </FilterContainer>
);

storiesOf('Filters', module)
    .add('FilterContainer', () => (
        <WithNotes>
            <div className="pa4 bg-near-white mw6">
                {sampleFilterContainer()}
            </div>
        </WithNotes>
    ))
    .add('Filter:Text', () => (
        <WithNotes notes="The `data` array should have a `value` set as the initial value. `onChange` should be a callback that alters the `data.value`.">
            <Filter
                id="text1"
                type="text"
                data={{
                    placeholder: 'A text filter'
                }}
            />
        </WithNotes>
    ))
    .add('Filter:Select', () => (
        <WithNotes notes="The `data` array should have a `value` set as the initial value. `onChange` should be a callback that alters the `data.value`.">
            <Filter
                type="select"
                data={{
                    currentlySelectedId: 1,
                    inputProps: {
                        id: 'select2'
                    },
                    options: [
                        {
                            id: 1,
                            text: 'Option 1'
                        },
                        {
                            id: 2,
                            text: 'Option 2'
                        }
                    ]
                }}
            />
        </WithNotes>
    ));

storiesOf('Scheduling', module)
    .add('DateRangePicker', () => (
        <div className=" pa4">
            <DateRangePicker
                startDate={moment()}
                endDate={moment().add(3, 'days')}
                onDatesChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
                focusedInput={START_DATE}
                onFocusChange={focusedInput => console.log({ focusedInput })}
            />
        </div>
    ))
    .add('DefaultCalendar', () => (
        <WithNotes notes="The default, full calendar.">
            <div className=" pa4" style={{height: '100vh'}}>
                <BigCalendar
                    events={sampleEvents}
                    startAccessor={(event) => new Date(event.selectedDates.start)}
                    endAccessor={(event) => new Date(event.selectedDates.end)}
                />
            </div>
        </WithNotes>
    ))
    .add('OverviewCalendar', () => (
        <WithNotes notes="">
            <div className="ma4">
                <Box title="Calendar">
                    <OverviewCalendar
                        events={sampleEvents}
                        filter={{
                            property: 'userId',
                            values: [0]
                        }}
                    />
                </Box>
            </div>
        </WithNotes>
    ))
    .add('OpportunityModal', () => (
        <WithNotes notes="">
            <OpportunityModal
                updateOpportunity={(opportunity) => console.log(opportunity)}
                closeModal={() => console.log('modal "closed"')}
                isOpen={true}
                opportunity={{
                    isAllDay: false,
                    selectedDates: {
                        start: new Date(1970, 0, 0),
                        end: new Date(1970, 0, 0)
                    },
                    employees: {
                        invited: 'all',
                        confirmed: []
                    }
                }}
            />
        </WithNotes>
    ))
    .add('ShiftManager', () => (
        <WithNotes notes="">
            <div className="pa4 min-vh-100 bg-near-white">
                <ShiftManager/>
            </div>
        </WithNotes>
    ));

storiesOf('Employees', module)
    .add('UserTable', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <UserTable/>
            </div>
        </WithNotes>
    ))
    .add('UserTable:Inline new user interface', () => (
        <WithNotes notes="An experimental interface to add new users inline with the table interface.">
            <div className="pa4 bg-near-white">
                <UserTable inlineAddingRowIsOpen={true}/>
            </div>
        </WithNotes>
    ))
    .add('SelectableUserTable', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <SelectableUserTable/>
            </div>
        </WithNotes>
    ))
    .add('EmployeeSelectionInterface', () => (
        <WithNotes>
            <div className="pa4 bg-white">
                <EmployeeSelectionInterface className="pa3 ba b--black-20" employees={users}/>
            </div>
        </WithNotes>
    ))
    .add('EmployeeSelectionInterface:SelectEmployees:Individuals', () => (
        <WithNotes>
            <div className="pa4 bg-white">
                <div className="w-50 pa3">
                    <SelectIndividuals/>
                </div>
            </div>
        </WithNotes>
    ))
    .add('EmployeeSelectionInterface:SelectEmployees:Groups', () => (
        <WithNotes>
            <div className="pa4 bg-white">
                <div className="w-50 pa3">
                    <SelectGroups/>
                </div>
            </div>
        </WithNotes>
    ))
    .add('EmployeeSelectionInterface:SelectEmployees:CustomRules', () => (
        <WithNotes>
            <div className="pa4 bg-white">
                <div className="w-50 pa3">
                    <SelectCustomRules/>
                </div>
            </div>
        </WithNotes>
    ));

storiesOf('Employees:Groups', module)
    .add('Card', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <GroupCard
                    group={{
                        id: 0,
                        name: 'Sample Group',
                        employees: users
                    }}
                />
            </div>
        </WithNotes>
    ))
    .add('CardList', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <GroupCardList
                    groups={[...Array(10).keys()].map((number) => {
                        return {
                            id: number,
                            name: `Sample Group ${number + 1}`,
                            employees: users
                        };
                    })}
                    onSelectGroup={(groupId) => console.log(`Group ID ${groupId} selected`)}
                />
            </div>
        </WithNotes>
    ))
    .add('DetailsEditor', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <GroupDetailsEditor
                    group={{
                        id: 0,
                        name: 'Sample Group',
                        employees: users
                    }}
                />
            </div>
        </WithNotes>
    ));

storiesOf('Profile', module)
    .add('AvailabilityEditor', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <Box className="w-third" title="Availability">
                    <AvailabilityEditor employee={users[0]} onSubmitAvailability={(availability) => console.log(availability)}/>
                </Box>
            </div>
        </WithNotes>
    ))
    .add('TimeOffRequestList', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <Box className="w-third" title="Time Off Requests">
                    <TimeOffRequestList timeOffRequests={timeOffRequests} employee={users[3]}/>
                </Box>
            </div>
        </WithNotes>
    ))
    .add('NewTimeOffRequestModal', () => (
        <WithNotes>
            <NewTimeOffRequestModal
                closeModal={() => console.log('modal "closed"')}
                isOpen={true}
                onSubmitRequest={(request) => console.log(request)}
            />
        </WithNotes>
    ));


storiesOf('Miscellaneous', module)
    .add('ShiftList', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <ShiftList/>
            </div>
        </WithNotes>
    ));
