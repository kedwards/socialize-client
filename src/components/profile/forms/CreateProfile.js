import React, { Fragment, useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Trans } from "@lingui/macro";
import { I18n } from "@lingui/react";
import { t } from "@lingui/macro";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../../redux/actions/profile";

const Createprofile = ({ createProfile }) => {
    const [formData, setFormData] = useState({
        company: "",
        website: "",
        location: "",
        status: "",
        skills: "",
        githubusername: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        instagram: "",
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>
            <h1 className='large text-primary'>
                <Trans>Create Your Profile</Trans>
            </h1>
            <p className='lead'>
                <i className='fas fa-user'></i>{" "}
                <Trans>
                    Let's get some information to make your profile stand out
                </Trans>
            </p>
            <small>
                <Trans>* = required field</Trans>
            </small>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <select
                        name='status'
                        value={status}
                        onChange={e => onChange(e)}>
                        <I18n>
                            {({ i18n }) => (
                                <option value='0'>
                                    {i18n._(t`* Select Professional Status`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Developer'>
                                    {i18n._(t`Developer`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Junior Developer'>
                                    {i18n._(t`Junior Developer`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Senior Developer'>
                                    {i18n._(t`Senior Developer`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Manager'>
                                    {i18n._(t`Manager`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Student or Learning'>
                                    {i18n._(t`Student or Learning`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Instructor'>
                                    {i18n._(t`Instructor or Teacher`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Intern'>
                                    {i18n._(t`Intern`)}
                                </option>
                            )}
                        </I18n>
                        <I18n>
                            {({ i18n }) => (
                                <option value='Other'>
                                    {i18n._(t`Other`)}
                                </option>
                            )}
                        </I18n>
                    </select>
                    <small className='form-text'>
                        <Trans>
                            Give us an idea of where you are at in your career
                        </Trans>
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <Trans>
                            Could be your own company or one you work for
                        </Trans>
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <Trans>Could be your own or a company website</Trans>
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <Trans>City & state suggested (eg. Boston, MA)</Trans>
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Skills'
                        name='skills'
                        value={skills}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <Trans>
                            Please use comma separated values (eg.
                            HTML,CSS,JavaScript,PHP)
                        </Trans>
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <Trans>
                            If you want your latest repos and a Github link,
                            include your username
                        </Trans>
                    </small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='A short bio of yourself'
                        name='bio'
                        value={bio}
                        onChange={e => onChange(e)}></textarea>
                    <small className='form-text'>
                        <Trans>Tell us a little about yourself</Trans>
                    </small>
                </div>

                <div className='my-2'>
                    <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        type='button'
                        className='btn btn-light'>
                        <Trans>Add Social Network Links</Trans>
                    </button>
                    <span>
                        <Trans>Optional</Trans>
                    </span>
                </div>

                {displaySocialInputs && (
                    <Fragment>
                        <div className='form-group social-input'>
                            <i
                                className='fab fa-twitter fa-2x'
                                color='dodgerblue'
                            />
                            &nbsp;&nbsp;
                            <input
                                type='text'
                                placeholder='Twitter URL'
                                name='twitter'
                                value={twitter}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i
                                className='fab fa-facebook fa-2x'
                                color='steelblue'
                            />
                            &nbsp;&nbsp;
                            <input
                                type='text'
                                placeholder='Facebook URL'
                                name='facebook'
                                value={facebook}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fab fa-youtube fa-2x' color='red' />
                            &nbsp;
                            <input
                                type='text'
                                placeholder='YouTube URL'
                                name='youtube'
                                value={youtube}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i
                                className='fab fa-linkedin  fa-2x'
                                color='blue'
                            />
                            &nbsp;&nbsp;
                            <input
                                type='text'
                                placeholder='Linkedin URL'
                                name='linkedin'
                                value={linkedin}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fab fa-instagram  fa-2x' />
                            &nbsp;&nbsp;
                            <input
                                type='text'
                                placeholder='Instagram URL'
                                name='instagram'
                                value={instagram}
                                onChange={e => onChange(e)}
                            />
                        </div>
                    </Fragment>
                )}

                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    <Trans>Go Back</Trans>
                </Link>
            </form>
        </Fragment>
    );
};

Createprofile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(
    null,
    { createProfile },
)(withRouter(Createprofile));
