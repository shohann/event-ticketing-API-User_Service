import { compare, hash } from 'bcryptjs';
import { IHashProvider } from '../../interfaces/providers/IHashPovider';

class BcryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BcryptHashProvider;

// https://github.de/alxrdev/apply-api/tree/master
// https://github.com/andrehahn05/typeorm-api-vendas/blob/main/src/modules/users/providers/HashProvider/implementations/BcryptHashProvider.ts