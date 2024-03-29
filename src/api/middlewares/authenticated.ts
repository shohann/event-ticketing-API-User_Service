import { Request, Response, NextFunction } from 'express';
import { container } from "tsyringe";
import ITokenBasedAuthProvider from '../../interfaces/providers/ITokenBasedAuthProvider';

export default function authenticated(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    const authHeader = req.headers.authorization;
    const authProvider: ITokenBasedAuthProvider = container.resolve('IAuthProvider');

    if (!authHeader) {
        throw new Error('Header not found');
    }

    const [, token] = authHeader
      .split(' ');
    const data = authProvider
      .decodeToken(token);
    req.user = { 
      id: data.id,
      role: data.role 
    };

    next();
};

// https://github.com/myllenacruz/agoura/blob/master/src/domains/users/routes/user.routes.ts
