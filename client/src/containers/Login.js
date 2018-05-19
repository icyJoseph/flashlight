import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import LoginForm from "../components/LoginForm";
import Loader from "../components/Loader";

export class Login extends PureComponent {
  state = {
    loading: false,
    success: false,
    fail: false
  };

  login = user => {
    console.log(user);
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({ "content-type": "application/json" })
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new ServerError();
        }
      })
      .then(user => {
        this.props.setUser(user);
        this.setState({ loading: false, success: true });
      }).catch(e => {
        if (e instanceof ServerError) {
          this.setState({ loading: false, fail: true });
        } else {
          console.error(e);
        }
    })
  };

  render() {
    if (this.state.loading) {
      return <Loader delay={600} />;
    } else if (this.state.success) {
      return <Redirect to='/' />;
    }
    return <LoginForm error={this.state.fail} login={this.login} />;
  }
}

function ServerError() { }

export default Login;
