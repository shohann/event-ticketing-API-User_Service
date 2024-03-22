import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { container } from "../../ioc";
// import { container } from "tsyringe";

const usersController = container.resolve(UsersController);
const userRouter = Router();

userRouter
    .post('/signup', (req, res) => usersController.signUp(req, res));
userRouter
    .post('/login', (req, res) => usersController.login(req, res));

export default userRouter;