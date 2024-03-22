import { container } from 'tsyringe';
import ExpressLoader  from '../api/loaders/ExpressLoader';
import DatabaseLoader from '../api/loaders/DatabaseLoader';
import UsersRepository from '../repositories/UsersRepository';
import UsersService from '../services/UsersService';
import MessageBroker from '../queue';
import BcryptHashProvider from '../providers/HashProvider/BcryptHashProvider';
import IAuthProvider from '../interfaces/providers/IAuthProvider';
import JwtAuthProvider from '../providers/Auth/JwtAuthProvider';
import { config } from '../config';

container.registerSingleton('IHashProvider', BcryptHashProvider); // Why it is working without even a loader function?
container.registerSingleton('IMessageBroker',  MessageBroker );

container.register<IAuthProvider>('IAuthProvider', {
    useValue: new JwtAuthProvider({
        jwtSecret: config.jwtSecret,
        jwtExpiresTime: config.jwtExpiresTime
    })
});

container.register('IExpressLoader', { useClass: ExpressLoader });
container.register('IDatabaseLoader', { useClass: DatabaseLoader }); // Without this stil working why?
container.register('IUserService', { useClass: UsersService});
container.register('IUserRepository', { useClass: UsersRepository});

export { container };