import React, { PureComponent } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/FlatButton";

export class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault(); 
    this.props.login(this.state);
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        onSubmit={this.onSubmit}
      >
        <TextField
          floatingLabelText="Username"
          value={this.state.username}
          onChange={this.onChangeUsername}
          errorText={this.props.error ? "Error" : null}
        />
        <TextField
          floatingLabelText="Password"
          value={this.state.password}
          onChange={this.onChangePassword}
          errorText={this.props.error ? "Error" : null}
        />
        <Button type='submit' onClick={this.onSubmit}>Login</Button>
      </form>
    );
  }
}

export default LoginForm;
