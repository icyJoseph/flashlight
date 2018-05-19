import React from 'react';
import TextField from 'material-ui/TextField';

export const EventForm = ({
	handleChange,
	onSubmit,
	title,
	location,
	description,
	activity
}) => {
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
			<TextField
				id="title"
				value={title}
				placeholder="Title"
				onChange={e => handleChange('title', e)}
			/>
			<TextField
				id="location"
				value={location}
				placeholder="Location"
				onChange={e => handleChange('location', e)}
			/>
			<TextField
				id="description"
				value={description}
				placeholder="Description"
				onChange={e => handleChange('description', e)}
			/>
			<TextField
				id="activity"
				value={activity}
				placeholder="Activity"
				onChange={e => handleChange('activity', e)}
			/>
			<button id="submit" onClick={e => onSubmit(e)}>
				Submit!
			</button>
		</form>
	);
};

export default EventForm;
