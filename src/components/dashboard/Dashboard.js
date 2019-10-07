import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Trans } from "@lingui/macro";
import Spinner from "../layout/spinner/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../redux/actions/profile";

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className='large text-primary'>
                <Trans>Dashboard</Trans>
            </h1>
            <p className='lead'>
                <i className='fas fa-user'></i>{" "}
                <Trans>Welcome {user && user.name}</Trans>
            </p>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />
                    <div className='my-2'>
                        <button
                            className='btn btn-danger'
                            onClick={() => deleteAccount()}>
                            <i className='fas fa-user-minus'></i>{" "}
                            <Trans>Delete My Account</Trans>
                        </button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p>
                        <Trans>
                            You have not yet setup a profile, please add some
                            info
                        </Trans>
                    </p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        <Trans>Create Profile</Trans>
                    </Link>
                </Fragment>
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(
    mapStateToProps,
    { getCurrentProfile, deleteAccount },
)(Dashboard);
