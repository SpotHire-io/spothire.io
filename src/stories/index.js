const React = require('react');
const storiesOf = require('@kadira/storybook').storiesOf;
const action = require('@kadira/storybook').action;
const WithNotes = require('@kadira/storybook-addon-notes').WithNotes;

const MainMenu = require('../components/Global/MainMenu');

const BasicButton = require('../components/Buttons/BasicButton');

const Post = require('../components/Newsfeed/Post');
const PostList = require('../components/Newsfeed/PostList');

const FilterContainer = require('../components/Filters/FilterContainer');
const Filter = require('../components/Filters/Filter');

import '../../public/css/style.css';

storiesOf('Global', module)
    .add('MainMenu', () => (
        <WithNotes>
            <MainMenu/>
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
    responseRequired: true
};

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
                        excerpt: (<p>Custom short excerpt.</p>)
                    }}
                    isOpen={false}
                />
            </div>
        </WithNotes>
    ))
    .add('PostList', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <PostList
                    posts={
                        [
                            samplePost,
                            samplePost,
                            samplePost
                        ]
                    }
                />
            </div>
        </WithNotes>
    ))
    .add('Newsfeed', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <div className="flex">
                    {sampleFilterContainer('mr3 w-third self-start')}
                    <PostList
                        className="w-two-thirds"
                        posts={
                            [
                                samplePost,
                                samplePost,
                                samplePost
                            ]
                        }
                    />
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
                id="select2"
                type="select"
                data={{
                    currentlySelectedId: 1,
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