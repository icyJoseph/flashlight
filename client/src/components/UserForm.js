import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

import interests from '../constants/interests';

export class UserForm extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			username: '',
			password: '',
			interest1: '',
			interest2: '',
			interest3: ''
		};
	}

	onChangeName = event => {
		this.setState({ name: event.target.value });
	};
	onChangeUsername = event => {
		this.setState({ username: event.target.value });
	};

	onChangePassword = event => {
		this.setState({ password: event.target.value });
	};

	onChangeInterest1 = e => {
		this.setState({ interest1: e });
	};
	onChangeInterest2 = e => {
		this.setState({ interest2: e });
	};
	onChangeInterest3 = e => {
		this.setState({ interest3: e });
	};

	onSubmit = e => {
		e.preventDefault();
		const user = {
			name: this.state.name,
			username: this.state.username,
			password: this.state.password,
			interests: [
				this.state.interest1,
				this.state.interest2,
				this.state.interest3
			]
		};
		this.props.createUser(user);
	};

	render() {
		return (
			<div
				style={{
					marginTop: '10px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<span style={{ fontSize: '2em' }}>Sign up</span>
				<form
					style={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onSubmit={this.onSubmit}
				>
					<TextField
						floatingLabelText="Name"
						value={this.state.name}
						onChange={this.onChangeName}
						errorText={this.props.error ? 'Error' : null}
					/>
					<TextField
						floatingLabelText="Username"
						value={this.state.username}
						onChange={this.onChangeUsername}
						errorText={this.props.error ? 'Error' : null}
					/>
					<TextField
						floatingLabelText="Password"
						type="password"
						value={this.state.password}
						onChange={this.onChangePassword}
						errorText={this.props.error ? 'Error' : null}
					/>
					<AutoComplete
						floatingLabelText="Interest 1"
						searchText={this.state.interest1}
						onUpdateInput={e => this.onChangeInterest1(e)}
						onNewRequest={e => this.onChangeInterest1(e)}
						maxSearchResults={3}
						dataSource={interests}
						filter={AutoComplete.caseInsensitiveFilter}
						openOnFocus={true}
					/>
					<AutoComplete
						floatingLabelText="Interest 2"
						searchText={this.state.interest2}
						onUpdateInput={e => this.onChangeInterest2(e)}
						onNewRequest={e => this.onChangeInterest2(e)}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						targetOrigin={{ vertical: 'bottom', horizontal: 'left' }}
						maxSearchResults={3}
						dataSource={interests}
						filter={AutoComplete.caseInsensitiveFilter}
						openOnFocus={true}
					/>
					<AutoComplete
						floatingLabelText="Interest 3"
						searchText={this.state.interest3}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						targetOrigin={{ vertical: 'bottom', horizontal: 'left' }}
						maxSearchResults={3}
						onUpdateInput={e => this.onChangeInterest3(e)}
						onNewRequest={e => this.onChangeInterest3(e)}
						dataSource={interests}
						filter={AutoComplete.caseInsensitiveFilter}
						openOnFocus={true}
					/>
					<Button primary type="submit" onClick={this.onSubmit}>
						Okay!
					</Button>
				</form>
			</div>
		);
	}
}

export default UserForm;
