import express from 'express';
import { signin, signout } from '../controllers/auth';

const router = express.Router();

router.route('/auth/signin').post(signin);

router.route('/auth/signout').get(signout);

export default router;
