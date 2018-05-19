import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import UserForm from "../components/UserForm";
import Loader from "../components/Loader";

export class Signup extends PureComponent {
  state = {
    loading: false,
    success: false,
    usernameTaken: false
  };

  signup = user => {
    console.log(user);
    fetch("/api/user/create", {
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
        this.setState({ loading: false, success: true });
      }).catch(e => {
        if (e instanceof ServerError) {
          this.setState({ loading: false, usernameTaken: true });
        } else {
          console.error(e);
        }
    })
  };

  render() {
    if (this.state.loading) {
      return <Loader delay={600} />;
    } else if (this.state.success) {
      return <Redirect to='/login' />;
    }
    return <UserForm error={this.state.usernameTaken} createUser={this.signup} />;
  }
}

function ServerError() { }

export default Signup;
