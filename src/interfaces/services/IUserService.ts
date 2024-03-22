import ILogInRequestDTO from "../../api/dtos/ILogInRequestDTO";
import ILogInResponseDTO from "../../api/dtos/ILogInResponseDTO";
import ISignUpRequestDTO from "../../api/dtos/ISignUpRequestDTO";
import ISignUpResponseDTO from "../../api/dtos/ISignUpResponseDTO";

export default interface IUserService {
    signUp(data: ISignUpRequestDTO): Promise<ISignUpResponseDTO>;
    logIn(data: ILogInRequestDTO): Promise<ILogInResponseDTO>;
};