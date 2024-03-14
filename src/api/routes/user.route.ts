import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { container } from "../../ioc";

const usersController = container.resolve(UsersController);
const userRouter = Router();

userRouter
    .post('/signup', (req, res) => usersController.signUp(req, res));

export default userRouter;