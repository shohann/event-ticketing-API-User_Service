import { IUser } from "../../models/IUser"

export default interface IAuthProvider {
  authenticateUser (user: IUser): string
};
