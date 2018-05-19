import React, { PureComponent, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Loadable from "react-loadable";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Loader from "./components/Loader";
import EventPage from "./components/EventPage";
import NotLoginSplash from "./components/NotLoginSplash";

const AsyncHome = Loadable({
  loader: () => import("./containers/Home"),
  loading: Loader,
  delay: 600
});

const AsyncFeed = Loadable({
  loader: () => import("./containers/Feed"),
  loading: Loader,
  delay: 600
});

const asyncMe = Loadable({
  loader: () => import("./containers/Me"),
  loading: Loader,
  delay: 600
});

const AsyncSignup = Loadable({
  loader: () => import("./containers/Signup"),
  loading: Loader,
  delay: 600
});

const AsyncLogin = Loadable({
  loader: () => import("./containers/Login"),
  loading: Loader,
  delay: 600
});

const asyncHistory = Loadable({
  loader: () => import("./containers/History"),
  loading: Loader,
  delay: 600
});

export class Routes extends PureComponent {
  state = {
    user: JSON.parse(localStorage.getItem("user"))
  };

  setUser = user => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ user });
  };

  renderWithUser = Component => {
    return props => <Component {...props} user={this.state.user} />;
  };

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Fragment>
            <TopBar />
            <Route
              path="/EventPage/:id"
              exact
              render={this.renderWithUser(EventPage)}
            />
            <Route path="/history/:id?" exact component={asyncHistory} />
            <Route path="/me/:id?" exact component={asyncMe} />

            <Route path="/signup" exact component={AsyncSignup} />
            <Route
              path="/login"
              exact
              render={props => <AsyncLogin {...props} setUser={this.setUser} />}
            />

            {this.state.user != null ? (
              [
                <Route
                  path="/"
                  exact
                  render={this.renderWithUser(AsyncHome)}
                />,
                <Route path="/" exact render={this.renderWithUser(AsyncFeed)} />
              ]
            ) : (
              <Route
                path="/"
                exact
                render={props => (
                  <NotLoginSplash {...props} setUser={this.setUser} />
                )}
              />
            )}

            <Route
              path="/logout"
              exact
              render={props => {
                this.setUser(null);
                props.history.replace("/");
                return null;
              }}
            />
            <BottomBar />
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
