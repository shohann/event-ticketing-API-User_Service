import express, {
    Application,
    Response,
    Request,
    NextFunction
} from 'express';
import IExpressLoader from '../../interfaces/loaders/IExpressLoader';

export default class ExpressLoader implements IExpressLoader {
    LoadApp(app: Application) {
        app.use(express.json());

        app.use('/', (req: Request, res: Response, next: NextFunction) => {
            return res.status(200).json({"msg": "Hello from user"})
        });
    }
};