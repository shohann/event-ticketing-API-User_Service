import { Role } from "../../database/entities/User"

export default interface IProfileResponseDTO {
    id: number,
    email: string,
    userName: string,
    firstName: string,
    lastName: string,
    role: Role,
};