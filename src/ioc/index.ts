import { container } from 'tsyringe';
import ExpressLoader  from '../api/loaders/ExpressLoader';
import DatabaseLoader from '../api/loaders/DatabaseLoader';
import UsersRepository from '../repositories/UsersRepository';
import UsersService from '../services/UsersService';

container.register('IExpressLoader', { useClass: ExpressLoader });
container.register('IDatabaseLoader', { useClass: DatabaseLoader }); // Without this stil working
container.register('IUserService', { useClass: UsersService});
container.register('IUserRepository', { useClass: UsersRepository});

export { container };

