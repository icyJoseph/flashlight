import React, { PureComponent } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/RaisedButton";

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

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <span style={{ fontSize: "2em" }}>Login</span>
        <form
          onSubmit={this.onSubmit}
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <TextField
            floatingLabelText="Username"
            value={this.state.username}
            onChange={this.onChangeUsername}
            errorText={this.props.error ? "Error" : null}
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            errorText={this.props.error ? "Error" : null}
          />
          <Button primary type="submit" onClick={this.onSubmit}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
