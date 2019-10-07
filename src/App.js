import React, { Component, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import Uploads from "./components/uploads/Uploads";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import PrivateRoute from "./components/route/PrivateRoute";

import { I18nProvider } from "@lingui/react";
import en from "./locales/en/messages";
import fr from "./locales/fr/messages";
import es from "./locales/es/messages";
import zh from "./locales/zh/messages";

import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./components/utils/setAuthToken";

// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// library.add(fas, fab);
// Kicks off the process of finding <i> tags and replacing with <svg>
// dom.watch();

const catalogs = { en: en, fr: fr, es: es, zh: zh };

import "./resources/css/App.css";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                    <section className='container'>
                        <Alert />
                        <Switch>
                            <Route
                                exact
                                path='/register'
                                component={Register}
                            />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/uploads' component={Uploads} />
                            <PrivateRoute
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            />
                            <Route
                                exact
                                path='/create-profile'
                                component={CreateProfile}
                            />
                            <Route
                                exact
                                path='/edit-profile'
                                component={EditProfile}
                            />
                            <Route
                                exact
                                path='/add-experience'
                                component={AddExperience}
                            />
                            <Route
                                exact
                                path='/add-education'
                                component={AddEducation}
                            />
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    );
};

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { language: "en" };
        console.log(this.state);
    }
    changeLang = lang => {
        this.setState(Object.assign({}, this.state, { language: lang }));
    };

    render() {
        return (
            <I18nProvider
                language={this.state.language}
                catalogs={catalogs}
                callback={this.changeLang}>
                <App callback={this.changeLang} />
            </I18nProvider>
        );
    }
}

export default Wrapper;
