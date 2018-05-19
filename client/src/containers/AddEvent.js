import React, { Component } from 'react';
import EventForm from '../components/EventForm';

class AddEvent extends Component {
	state = { title: '', location: '', description: '', activity: '' };

	handleChange = (id, e) => {
		switch (id) {
			case 'title':
				this.setState({ title: e.target.value });
				break;
			case 'location':
				this.setState({ location: e.target.value });
				break;
			case 'description':
				this.setState({ description: e.target.value });
				break;
			case 'activity':
				this.setState({ activity: e.target.value });
				break;
			default:
				break;
		}
	};

	onSubmit = e => {
		alert('Activity Posted!');
		e.preventDefault();

		fetch('/api/event/create', {
			method: 'POST',
			body: JSON.stringify({
				title: this.state.title,
				location: this.state.location,
				participants: [this.props.user.id],
				description: this.state.description,
				activity: this.state.activity
			}),
			headers: new Headers({ 'content-type': 'application/json' })
		});
		this.props.history.push('/');
	};

	render() {
		return (
			<div
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '1em'
				}}
			>
				<header>
					<h1 style={{ fontSize: '16pt', fontWeight: 'lighter', margin: 5 }}>
						Add an Event!
					</h1>
				</header>
				<div>
					<EventForm
						handleChange={this.handleChange}
						onSubmit={this.onSubmit}
						title={this.state.title}
						location={this.state.location}
						description={this.state.description}
						activity={this.state.activity}
					/>
				</div>
			</div>
		);
	}
}

export default AddEvent;
