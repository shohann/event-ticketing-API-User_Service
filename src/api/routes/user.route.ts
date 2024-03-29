import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { container } from "../../ioc";
import authenticated from "../middlewares/authenticated";

const usersController = container.resolve(UsersController);
const userRouter = Router();

userRouter
    .post('/signup', (req, res) => usersController.signUp(req, res));
userRouter
    .post('/login', (req, res, next) => usersController.login(req, res, next));
userRouter
    .get('/profile',  authenticated, (req, res) => usersController.profile(req, res))

export default userRouter;