import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "src/user/domain/entities/user.entity";
import { UserRepository } from "src/user/domain/repositories/user.repository";
import { UserService } from "src/user/domain/services/user.service";
import { EncryptionService } from 'src/common/prisma/encryption/domain/encryption.service';
@Injectable()
export class ConcreteUserService extends UserService{

    constructor(
        private readonly userRepository: UserRepository,
        private readonly encryptionService: EncryptionService ){
        super();
    }
    async register(user: User): Promise<void>{
        const existsUser = await this.userRepository.findByEmail(user.email);
        if(existsUser){
            throw new BadRequestException("Usuario ja existe")
        }
        const hashedPassword = await this.encryptionService.encrypt(user.password)
        await this.userRepository.save({
            email:user.email,
            password: hashedPassword,
            name: user.name
        });
    }
}