import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Feed from "./containers/Feed";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Routes = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Fragment>
        <TopBar />
        <Route path="/" exact component={App} />
        <Route path="/" exact component={Feed} />
        <BottomBar />
      </Fragment>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Routes;
