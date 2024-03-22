import { Role } from "../database/entities/User";

export interface IUser {
    id: number,
    email: string,
    userName: string,
    firstName: string,
    lastName: string,
    password: string,
    role: Role,
    createdAt: Date,
    updatedAt: Date
};