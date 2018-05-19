import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Loadable from "react-loadable";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Loader from "./components/Loader";
import EventPage from "./components/EventPage";

const asyncHome = Loadable({
  loader: () => import("./containers/Home"),
  loading: Loader,
  delay: 600
});

const asyncFeed = Loadable({
  loader: () => import("./containers/Feed"),
  loading: Loader,
  delay: 600
});

export const Routes = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Fragment>
        <TopBar />
        <Route path="/EventPage/:id" exact component={EventPage} />
        <Route path="/" exact component={asyncHome} />
        <Route path="/" exact component={asyncFeed} />
        <BottomBar />
      </Fragment>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Routes;
