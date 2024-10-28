import { EncryptionService } from '#/src/common/encryption/domain/encryption.service';
import { genSalt, hash, compare } from 'bcrypt';

export class BCryptEncryptionService extends EncryptionService {
  private readonly saltRounds = 10;

  async encrypt(data: string): Promise<string> {
    const salt = await genSalt(this.saltRounds);
    return hash(data, salt);
  }

  async compare(data: string, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}
