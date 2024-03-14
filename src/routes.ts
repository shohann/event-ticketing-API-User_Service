import { Router } from 'express';
import UserRoute from './api/routes/user.route';
const routes = Router();

routes.use('/users', UserRoute);

export default routes;