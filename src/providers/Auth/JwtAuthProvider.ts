import { injectable } from 'tsyringe'
import jsonWebToken from 'jsonwebtoken'
import IAuthProvider from '../../interfaces/providers/IAuthProvider';
import { IUser } from '../../models/IUser';
import IAuthSettings from '../../interfaces/providers/IAuthSettings';
import ITokenBasedAuthProvider, { Payload } from '../../interfaces/providers/ITokenBasedAuthProvider';

@injectable()
export default class JwtAuthProvider implements IAuthProvider, ITokenBasedAuthProvider {
  constructor (private readonly authSettings: IAuthSettings) {}

  public authenticateUser (user: IUser): string {
    return this.generateToken(user)
  }

  public generateToken (user: IUser) : string {
    const token = jsonWebToken.sign(
      { id: user.id, role: user.role },
      this.authSettings.jwtSecret,
      { expiresIn: this.authSettings.jwtExpiresTime }
    )

    return token
  }

  public decodeToken (token: string) : Payload {
    const decode = jsonWebToken.verify(token ?? '', this.authSettings.jwtSecret, { ignoreExpiration: true })
    return decode as Payload
  }
}