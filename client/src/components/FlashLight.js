import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from "material-ui/FlatButton";

export class FlashLight extends Component {
  state = {
    searching: true,
    match: null,
    matchedUser: null
  };

  componentWillReceiveProps(props) {
    if (props.open) {
      fetch('/api/match/search', {
        method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(
          {
            participants:[this.props.user.id],
            event: null
          }
        )
      }).then(res => res.json())
      .then(actualResult => {
        fetch('/api/user/' + actualResult.match.participants[0])
        .then(userRes => userRes.json())
        .then(user => {
          this.setState({searching: false, matchedUser: user})
        })
      })
      .catch(e => console.error(e));
    }
  }
  render() {
    const actions = [
      <FlatButton label="Pass" primary={true} onClick={this.props.handleClose} />,
      <FlatButton label="To Event" primary={true} onClick={() => {}} />
    ];
    const content = this.state.searching ? this.renderSearching() : this.renderMatch();
    const title = this.state.searching ? "Searching for a Match" : "Congratulations";
    return (
      <Dialog
        title= {title}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}>
        {content}
      </Dialog>
    );
  }

  renderSearching() {
    return <CircularProgress/>;
  }
  
  renderMatch() {
    return "You matched with " + this.state.matchedUser.name + "!";
  }
}
export default FlashLight;
