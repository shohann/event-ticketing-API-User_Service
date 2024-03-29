import { Repository } from "typeorm";
import { User } from "../database/entities/User";
import { dataSource } from "../database"; // TODO: Dependency injection
import { IUser } from "../models/IUser";
import { ICreateUser } from "../models/ICreateUser";
import IUserRepository from "../interfaces/repositories/IUserRepository";

class UsersRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = dataSource.getRepository(User);
    }

    public async createUser(data: ICreateUser): Promise<IUser> {
        const user = this.repository.create({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            userName: data.userName,
            password: data.password
        });

        await this.repository.save(user);

        return user;
    }

    public async findUserByEmail(email: string): Promise<IUser | null> {
        const user = await this.repository.findOne({ where: { email } });

        return user;
    }

    public async findUserById(userId: number): Promise<IUser | null> {
        const user = await this.repository.findOne({ where: { id: userId } });

        return user;
    }
};

export default UsersRepository;
