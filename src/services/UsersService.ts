import { inject, injectable } from 'tsyringe';
import IUserService from '../interfaces/services/IUserService';
import IUserRepository from '../interfaces/repositories/IUserRepository';
import ISignUpRequestDTO from '../api/dtos/ISignUpRequestDTO';
import ISignUpResponseDTO from '../api/dtos/ISignUpResponseDTO';
import { IMessageBroker } from '../interfaces/loaders/IMessageBroker';
import { IHashProvider } from '../interfaces/providers/IHashPovider';
import IAuthProvider from '../interfaces/providers/IAuthProvider';
import { config } from '../config';
import ILogInRequestDTO from '../api/dtos/ILogInRequestDTO';
import ILogInResponseDTO from '../api/dtos/ILogInResponseDTO';
import IProfileResponseDTO from '../api/dtos/IProfileResponseDTO';
import NotFoundException from '../utils/exceptions/not.found.exception';

@injectable()
class UsersService implements IUserService {
    constructor(
        @inject('IUserRepository')
        private repository: IUserRepository,

        @inject('IMessageBroker')
        private  messageBroker: IMessageBroker,

        @inject('IHashProvider')
        private  hashProvider: IHashProvider,

        @inject('IAuthProvider')
        private  authProvider: IAuthProvider
    ) {}

    public async signUp(data: ISignUpRequestDTO): Promise<ISignUpResponseDTO> {
        const hashedPassword = await this.hashProvider
            .generateHash(data.password);

        const user = await this.repository.createUser({
            email: data.email,
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            password: hashedPassword
        });

        const token = this.authProvider.authenticateUser(user);

        /// Publish a message
        const channel = this.messageBroker.getChannel();
        const eventService = config.eventService;
        const message = JSON.stringify({
            event: 'USER_CREATED',
            data: {
                message: 'A new user has been created'
            }
        });

        // this.messageBroker.publishMessage(eventService, message);
        await this.messageBroker.publishMessage('user_service', message)
        //

        // Data mapper
        return {
            id: user.id,
            email: user.email,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            token: token
        }
    }
    
    public async logIn(data: ILogInRequestDTO): Promise<ILogInResponseDTO> {
        const email = data.email;
        const password = data.password;

        const user = await this.repository.findUserByEmail(email);
        // if (!user) {
        //     throw new Error('User not authenticated');
        // }
        if (!user) {
            throw new NotFoundException('User not found');
        }


        const isAuthenticated = this.hashProvider.compareHash(password, user.password);
        if (!isAuthenticated) {
            throw new Error('User not authenticated');
        }

        const token = this.authProvider.authenticateUser(user);

        return {
            id: user.id,
            role: user.role,
            token: token
        }
    }

    public async profile(userId: number): Promise<IProfileResponseDTO> {
        const user = await this.repository.findUserById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        return {
            id: user.id,
            email: user.email,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        }
    }
    
};

export default UsersService;