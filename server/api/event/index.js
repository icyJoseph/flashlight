import { Router } from 'express';

const router = Router();

// Get event list
router.get('/list', (req, res) => {
	res.send('get event list');
});

// Create event
router.get('/create', (req, res) => {
	res.send('create event');
});

export default router;
