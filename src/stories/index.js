const React = require('react');
const storiesOf = require('@kadira/storybook').storiesOf;
const WithNotes = require('@kadira/storybook-addon-notes').WithNotes;

const MainMenu = require('../components/Global/MainMenu');

const BasicButton = require('../components/Buttons/BasicButton');

const PostItem = require('../components/Newsfeed/PostItem');

const FilterContainer = require('../components/List/FilterContainer');

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

storiesOf('Newsfeed', module)
    .add('PostItem', () => (
        <WithNotes>
            <div className="pa4 bg-near-white">
                <PostItem
                    post={{
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
                    }}
                />
            </div>
        </WithNotes>
    ));

storiesOf('List', module)
    .add('FilterContainer', () => (
        <WithNotes>
            <div className="pa4 bg-near-white mw6">
                <FilterContainer>
                    Filters...
                </FilterContainer>
            </div>
        </WithNotes>
    ));