const React = require('react');
const storiesOf = require('@kadira/storybook').storiesOf;
const action = require('@kadira/storybook').action;
const WithNotes = require('@kadira/storybook-addon-notes').WithNotes;

const moment = require('moment');

const SingleDatePicker = require('react-dates').SingleDatePicker;
const DateRangePicker  = require('react-dates').DateRangePicker;

const START_DATE = require('react-dates/constants').START_DATE;

const MainMenu = require('../components/Global/MainMenu');
const SecondaryMenu = require('../components/Global/SecondaryMenu');
const Box = require('../components/Global/Box');

import BasicButton from '../components/Buttons/BasicButton';
import RadioButton from '../components/Buttons/RadioButton';
import ButtonBar from '../components/Buttons/ButtonBar';

const Post = require('../components/Newsfeed/Post');
const PostList = require('../components/Newsfeed/PostList');

const FilterContainer = require('../components/Filters/FilterContainer');
const Filter = require('../components/Filters/Filter');

const OverviewCalendar = require('../components/Scheduling/OverviewCalendar');
import OpportunityModal from '../components/Scheduling/OpportunityModal';

const UserTable = require('../components/Miscellaneous/UserTable');
const SectionSwitcher = require('../components/Miscellaneous/SectionSwitcher');

import '../../public/css/app.css';

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
                <li>Is the interface natural? Would an admin or talent be able to find their way around?</li>
                <li>Are any aspects of the interface confusing? How so?</li>
                <li>What does a more polished version of this look like?</li>
                <li>Does anything seem out of place or unnecessary?</li>
            </ul>

            <p className="measure">Thanks, and I look forward to talking more!</p>
        </div>
    ));

storiesOf('Views', module)
    .add('Views:Newsfeed', () => (
        <div>
            <MainMenu selectedItem="Newsfeed"/>
            <div className="pa4 bg-near-white">
                <div className="flex">
                    {sampleFilterContainer('mr3 w-third self-start')}
                    {samplePostList('w-two-thirds')}
                </div>
            </div>
        </div>
    ))
    .add('Views:People', () => (
        <div>
            <MainMenu selectedItem="People"/>
            <SectionSwitcher
                sections={[
                    {
                        key: 'people',
                        name: 'People',
                        content: (
                            <div className="flex">
                                {sampleFilterContainer('mr3 w-third self-start')}
                                <UserTable className="w-two-thirds"/>
                            </div>
                        )
                    },
                    {
                        key: 'groups',
                        name: 'Groups',
                        content: (
                            <div className="flex">
                                {sampleFilterContainer('mr3 w-third self-start')}
                                List of groups...
                            </div>
                        )
                    }
                ]}
            />
        </div>
    ))
    .add('Views:Schedule', () => (
        <div>
            <MainMenu selectedItem="Schedule"/>
            <div className="pa4 bg-near-white">
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
        </div>
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
                <BasicButton className="button--standard">Add Talent</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('BasicButton:Neutral', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--neutral">Add Talent</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('BasicButton:Positive', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--positive">Add Talent</BasicButton>
            </div>
        </WithNotes>
    ))
    .add('BasicButton:Negative', () => (
        <WithNotes>
            <div className="ma4">
                <BasicButton className="button--negative">Remove Talent</BasicButton>
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
    isRespondedTo: (Math.random() > 0.5)
};

const samplePostList = (className) => (
    <PostList
        className={className}
        posts={
            [
                {...samplePost},
                {...samplePost, id: 2},
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

const BigCalendar = require('react-big-calendar');

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const sampleEvents = require('../data/events.json');

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
                    startAccessor={(event) => new Date(event.start)}
                    endAccessor={(event) => new Date(event.end)}
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
                    }
                }}
            />
        </WithNotes>
    ));

storiesOf('Miscellaneous', module)
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
    ));