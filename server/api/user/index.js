import { Router } from 'express';

const router = Router();

// Create user
router.get('/create', (req, res) => {
	res.send('create user');
});

// Get user by id
router.get('/:id', (req, res) => {
	res.send('get user with id: ' + req.params.id);
});

// login a user
router.get('/login', (req, res) => {
	res.send('login user');
});

export default router;
