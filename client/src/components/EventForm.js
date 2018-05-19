import React from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

import interests from '../constants/interests';

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
				floatingLabelText="Title"
				onChange={e => handleChange('title', e)}
			/>
			<TextField
				id="location"
				value={location}
				floatingLabelText="Location"
				onChange={e => handleChange('location', e)}
			/>
			<TextField
				id="description"
				value={description}
				floatingLabelText="Description"
				onChange={e => handleChange('description', e)}
			/>
			<AutoComplete
				floatingLabelText="Activity"
				searchText={activity}
				onUpdateInput={e => handleChange('activity', e)}
				onNewRequest={e => handleChange('activity', e)}
				dataSource={interests}
				filter={AutoComplete.caseInsensitiveFilter}
				openOnFocus={true}
			/>
			<button id="submit" onClick={e => onSubmit(e)}>
				Submit!
			</button>
		</form>
	);
};

export default EventForm;
