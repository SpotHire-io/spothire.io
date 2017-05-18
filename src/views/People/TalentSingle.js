import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import Box from '../../components/Global/Box';

import MetadataInterface from '../../components/Talent/MetadataInterface';

class TalentSingleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div className="pv4 bg-near-white">
                <div className="flex mh4">
                    <Box className="w-third mr3">
                        <h2 className="f6 mt0 lh-title ttu">Talent Details</h2>

                        <h1 className="mb4 f3">{this.props.talent.firstName} {this.props.talent.lastName}</h1>
                        <img className="db w-100 ba bw1 b--silver border-box" src={this.props.talent.imageSrc} alt={`Profile photo of ${this.props.talent.firstName}`}/>

                        <div className="mt3">
                            <h3 className="f6 normal ma0">Other photos</h3>

                            <ul className="mt2 nb2 flex flex-wrap pa0 list nr2">
                                {[...Array(6).keys()].map((number) => (
                                    <li className="dib mt0 mb2 pa0 w-25 pr2">
                                        <img className="db w-100 ba bw1 b--silver border-box" src={this.props.talent.imageSrc} alt={`Profile photo of ${this.props.talent.firstName}`}/>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <dl className="mt3 mb0">
                            {[
                                {
                                    label: 'Email',
                                    content: <a className="link blue underline-hover" href={`mailto:${this.props.talent.email}`}>{this.props.talent.email}</a>
                                },
                                {
                                    label: 'Phone',
                                    content: this.props.talent.phone
                                },
                                {
                                    label: 'Emergency Contact Information',
                                    content: this.props.talent.emergencyContactInformation
                                }
                            ].map((dataPair) => (
                                <div className="mt3" key={dataPair.label}>
                                    <dt className="f6">{dataPair.label}</dt>
                                    <dd className="mh0 mb0 mt2">{dataPair.content}</dd>
                                </div>
                            ))}
                        </dl>
                    </Box>
                    <div className="w-two-thirds">
                        <Box>
                            <h2 className="f6 mt0 lh-title ttu">Talent Settings</h2>

                            <div className="flex mt3">
                                <p className="w-50 mr4">
                                    <label className="f6 db" htmlFor="talent_standard_rate">Standard hourly rate</label>
                                    <div className="inline-flex w-100 mt2">
                                        <div className="inline-flex self-stretch ph3 bg-near-white ba br-0 b--moon-gray">
                                            <span className="self-center">$</span>
                                        </div>
                                        <input className="flex-auto" type="number" id="talent_standard_rate" name="talent_standard_rate"/>
                                    </div>
                                </p>

                                <p className="w-50 mt0">
                                    <label className="f6 db" htmlFor="talent_overtime_rate">Overtime hourly rate</label>
                                    <div className="inline-flex w-100 mt2">
                                        <div className="inline-flex self-stretch ph3 bg-near-white ba br-0 b--moon-gray">
                                            <span className="self-center">$</span>
                                        </div>
                                        <input className="flex-auto" type="number" id="talent_overtime_rate" name="talent_overtime_rate"/>
                                    </div>
                                </p>
                            </div>

                            <p className="mt3">
                                <label className="f6 db" htmlFor="talent_notes">Notes</label>
                                <textarea className="mt2 w-100" name="talent_notes" id="talent_notes" aria-describedby="talent_notes_desc" cols="30" rows="5"/>
                                <small className="f6 black-60" id="talent_notes_desc">Only managers can read these notes.</small>
                            </p>
                        </Box>
                        <Box className="mt3">
                            <h2 className="f6 mt0 lh-title ttu">Talent Metadata</h2>

                            <MetadataInterface className="mt3" talent={this.props.talent}/>
                        </Box>
                    </div>
                </div>
            </div>
        );
    }
}

TalentSingleView.defaultProps = {
    className: '',
};

TalentSingleView.propTypes = {
    className: PropTypes.string,
    talent: PersonSchema.isRequired
};

export default TalentSingleView;
