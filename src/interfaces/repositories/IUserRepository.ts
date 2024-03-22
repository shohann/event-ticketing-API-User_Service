import { ICreateUser } from "../../models/ICreateUser"
import { IUser } from "../../models/IUser"

interface IUserRepository {
    createUser(data: ICreateUser): Promise<IUser>;
    findUserByEmail(email: string): Promise<IUser | null>;
}

export default IUserRepository;