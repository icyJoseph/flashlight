import { Router } from 'express';

const router = Router();

// Match for an event
router.get('/event', (req, res) => {
	res.send('Match for event');
});

// Magic match
router.get('/magic', (req, res) => {
	res.send('Magic match');
});

export default router;
