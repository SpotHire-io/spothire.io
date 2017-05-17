import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import Box from '../../components/Global/Box';

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

                        <p><i>Email</i></p>
                        <p><i>Phone</i></p>
                        <p><i>Emergency contact info</i></p>
                    </Box>
                    <Box className="w-two-thirds">
                        <h2 className="f6 mt0 lh-title ttu">Talent Settings</h2>

                        <p><i>Pay rate (hourly and overtime)</i></p>

                        <p className="mt3">
                            <label className="f6 db" htmlFor="talent_notes">Notes</label>
                            <textarea className="mt2 w-100" name="talent_notes" id="talent_notes" aria-describedby="talent_notes_desc" cols="30" rows="5"/>
                            <small className="f6 black-60" id="talent_notes_desc">Only managers can read these notes.</small>
                        </p>

                        <p><i>Metadata</i></p>
                    </Box>
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
