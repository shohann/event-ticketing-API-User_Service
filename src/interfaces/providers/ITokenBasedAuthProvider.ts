import { IUser } from "../../models/IUser"

export interface Payload {
  id: number
  role: string
  exp: number
}

export default interface ITokenBasedAuthProvider {
  generateToken(entity: IUser) : string
  decodeToken(token: string) : Payload
}
