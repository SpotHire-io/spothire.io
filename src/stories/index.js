const React = require('react');
const storiesOf = require('@kadira/storybook').storiesOf;
const WithNotes = require('@kadira/storybook-addon-notes').WithNotes;

const MainMenu = require('../components/Global/MainMenu');

const BasicButton = require('../components/Buttons/BasicButton');

const PostItem = require('../components/Newsfeed/PostItem');

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
            <PostItem
                post={{
                    id: 1,
                    title: "A very cool post",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit rerum sit vitae! Adipisci eum ipsam libero nam nesciunt quae, tenetur! Fugiat inventore iure libero quis voluptate! Accusantium alias debitis deserunt doloremque est et eum ex hic illum impedit ipsum minima minus nihil, non odit optio perspiciatis possimus provident quae quaerat quia quidem quo quod similique sit. A ad aliquid animi corporis dignissimos eos est ex, excepturi fuga, id inventore itaque libero maiores nisi omnis, quidem quo quod ratione soluta sunt totam veritatis voluptate. Ad consequatur debitis dolorem eos, id iusto laboriosam natus nulla officiis porro quis quod repellat, suscipit temporibus totam? Accusamus at atque autem beatae ducimus fugiat, inventore numquam officia qui sapiente sequi tenetur, unde. Animi aperiam assumenda debitis iusto nemo nisi obcaecati praesentium, repellendus rerum? Accusamus, asperiores beatae dicta distinctio maiores minus non optio possimus quas quidem repellat sint voluptatum? Assumenda distinctio, dolorem dolorum fugiat quasi saepe.",
                    date: "2017-03-13T12:00:00-04:00",
                    responseRequired: true
                }}
            />
        </WithNotes>
    ));