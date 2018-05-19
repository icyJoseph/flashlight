import { Router } from 'express';

import event from './event';
import search from './search';
import user from './user';
import match from './match';

const router = Router();

router.use('/match', match);
router.use('/event', event);
router.use('/search', search);
router.use('/user', user);

export default router;
