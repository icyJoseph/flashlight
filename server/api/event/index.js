import { Router } from 'express';
import { createEvent, getEvents } from '../../repository/event';

const router = Router();

// Get event list
router.get('/list', (req, res) => {
	res.send(getEvents());
});

// Create event
router.post('/create', (req, res) => {
	if (req.body != null) {
		createEvent(
			eventCreator(req.body.title, req.body.location, req.body.participants)
		);
	}
	// Should add redirect here
	res.send('Event Created!');
});

function eventCreator(title, location, participants) {
	const event = {
		title: title,
		location: location,
		participants: participants
	};

	return event;
}

export default router;
