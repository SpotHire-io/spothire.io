const React = require('react');
const storiesOf = require('@kadira/storybook').storiesOf;
const WithNotes = require('@kadira/storybook-addon-notes').WithNotes;

const MainMenu = require('../components/Global/MainMenu');

const BasicButton = require('../components/Buttons/BasicButton');

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
    ));
