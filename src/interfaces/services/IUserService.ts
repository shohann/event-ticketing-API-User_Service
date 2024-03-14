import ISignUpRequestDTO from "../../api/dtos/ISignUpRequestDTO";
import ISignUpResponseDTO from "../../api/dtos/ISignUpResponseDTO";

export default interface IUserService {
    signUp(data: ISignUpRequestDTO): Promise<ISignUpResponseDTO>;
};