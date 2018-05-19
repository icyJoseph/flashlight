import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Home from "./containers/Home";
import Feed from "./containers/Feed";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

export const Routes = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Fragment>
        <TopBar />
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Feed} />
        <BottomBar />
      </Fragment>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Routes;
