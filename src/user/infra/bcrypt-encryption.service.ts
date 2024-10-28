import { Injectable } from "@nestjs/common";
import { genSalt, compare, hash } from "bcrypt";
import { EncryptionService } from "src/common/prisma/encryption/domain/encryption.service";

@Injectable()
export class BcryptEncryptionService extends EncryptionService {
    async encrypt(data: string): Promise<string> {
        const salt = await genSalt(10);
        return hash(data, salt);
    }
    async compare(data: string, hashedData: string): Promise<boolean> {
        return compare(data, hashedData);
    }

}