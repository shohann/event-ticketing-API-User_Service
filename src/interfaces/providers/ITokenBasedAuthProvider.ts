import { IUser } from "../../models/IUser"

export interface Payload {
  id: string
  role: string
  exp: number
}

export default interface ITokenBasedAuthProvider {
  generateToken(entity: IUser) : string
  decodeToken(token: string) : Payload
}
