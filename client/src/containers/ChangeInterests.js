import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import interests from '../constants/interests';

class ChangeInterests extends Component() {
	state = {
		interest1: '',
		interest2: '',
		interest3: ''
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
	render() {
		return (
			<form
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginTop: '1em'
				}}
			>
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
			</form>
		);
	}
}

export default ChangeInterests;
