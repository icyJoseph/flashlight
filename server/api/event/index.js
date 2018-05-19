import { Router } from 'express';
import { createEvent, getEvents } from '../../repository/event';

const router = Router();

// Get event list
router.get('/list', (req, res) => {
	res.send(getEvents());
});

router.get('/create', (req, res) => {
	res.send('testing');
});

// Create event
router.post('/create', (req, res) => {
	createEvent(
		eventCreator(req.body.title, req.body.location, req.body.participants)
	);
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
