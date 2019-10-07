import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { Trans } from "@lingui/macro";
import { locales } from "../../locales/locales";

// const Locales = locales => {
//     return locales.map(l => (
//         <button
//             className='btn btn-primary my-1'
//             key={l.value}
//             onClick={() => this.props.callback(l.value)}>
//             {l.label}
//         </button>
//     ));
// };

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to='/profiles'>
                    <i className='fas fa-user' />{" "}
                    <span className='hide-sm'>
                        <Trans>Developers</Trans>
                    </span>
                </Link>
            </li>
            <li>
                <Link to='/uploads'>
                    <i className='fas fa-upload'></i>{" "}
                    <span className='hide-sm'>
                        <Trans>Uploads</Trans>
                    </span>
                </Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fas fa-tachometer-alt'></i>{" "}
                    <span className='hide-sm'>
                        <Trans>Dashboard</Trans>
                    </span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt'></i>{" "}
                    <span className='hide-sm'>
                        <Trans>Logout</Trans>
                    </span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>{/* <Locales /> */}</li>
            <li>
                <Link to='/register'>
                    <i className='fas fa-user'></i>{" "}
                    <span className='hide-sm'>
                        <Trans>Register</Trans>
                    </span>
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <i className='fas fa-lock'></i>{" "}
                    <span className='hide-sm'>
                        <Trans>Login</Trans>
                    </span>
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-code' color='red'></i>{" "}
                    <Trans>DevConnector</Trans>
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logout },
)(Navbar);
