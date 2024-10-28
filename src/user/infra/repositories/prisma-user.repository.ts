import { Injectable } from "@nestjs/common";
import { PrismaRepository } from "src/common/prisma/prisma.repository";
import { User } from "src/user/domain/entities/user.entity";
import { UserRepository } from "src/user/domain/repositories/user.repository";

@Injectable()
export class PrismaUserRepository extends UserRepository {

    constructor (private readonly prisma: PrismaRepository){
        super();
    }
    
    async save(user: User): Promise<void> {
        await this.prisma.user.create({data: user});
    }

    async findByEmail(email: string): Promise<User> {
        return this.prisma.user.findFirst({where: {email}})
    }
} 