import { container } from 'tsyringe';
import ExpressLoader  from '../api/loaders/ExpressLoader';
// import DatabaseLoader from '../api/loaders/DatabaseLoader';

container.register('IExpressLoader', { useClass: ExpressLoader });
// container.register('IDatabaseLoader', { useClass: DatabaseLoader });

export { container };

