import { inject, injectable } from 'tsyringe';
import IUserService from '../interfaces/services/IUserService';
import IUserRepository from '../interfaces/repositories/IUserRepository';
import ISignUpRequestDTO from '../api/dtos/ISignUpRequestDTO';
import ISignUpResponseDTO from '../api/dtos/ISignUpResponseDTO';

@injectable()
class UsersService implements IUserService {
    constructor(
        @inject('IUserRepository')
        private repository: IUserRepository,
    ) {}

    public async signUp(data: ISignUpRequestDTO): Promise<ISignUpResponseDTO> {
        const token = '123';

        const user = await this.repository.createUser({
            email: data.email,
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password // hash
        });

        return {
            id: user.id,
            email: user.email,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            token: token
        }
    }
};

export default UsersService;