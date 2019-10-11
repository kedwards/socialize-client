import React, { Component, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/Route/Routes";
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
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route component={Routes} />
                    </Switch>
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
