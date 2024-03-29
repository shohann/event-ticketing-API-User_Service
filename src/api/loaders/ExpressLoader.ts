import express, {
    Application,
    Response,
    Request,
    NextFunction
} from 'express';
import IExpressLoader from '../../interfaces/loaders/IExpressLoader';
import routes from '../../routes';
import { errorHandler } from '../middlewares/error.handler';

export default class ExpressLoader implements IExpressLoader {
    LoadApp(app: Application) {
        app.use(express.json());
        app.use(routes);
        app.use(errorHandler);


        // Invalid url error


        // app.use('/', (req: Request, res: Response, next: NextFunction) => {
        //     return res.status(200).json({"msg": "Hello from user"})
        // });
    }
};