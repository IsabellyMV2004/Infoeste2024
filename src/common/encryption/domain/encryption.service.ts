export abstract class EncryptionService {
  abstract encrypt(data: string): Promise<string>;
  abstract compare(data: string, hashedData: string): Promise<boolean>;
}
