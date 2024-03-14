import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IUserService from '../../interfaces/services/IUserService';

@injectable()
class UsersController {
    constructor(
        @inject('IUserService')
        private usersService: IUserService
    ) {}

    public async signUp(req: Request, res: Response):Promise<Response> {
        const { firstName, lastName, email, userName, password } = req.body;
        const user = await this.usersService.signUp({
            firstName,
            lastName,
            email,
            userName,
            password
        });

        return res.status(201).json(user);
    }
};

export default UsersController;