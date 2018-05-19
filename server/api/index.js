import { Router } from 'express';

import event from './event';
import match from './match';
import user from './user';

const router = Router();

router.use('/event', event);
router.use('/match', match);
router.use('/user', user);

export default router;
