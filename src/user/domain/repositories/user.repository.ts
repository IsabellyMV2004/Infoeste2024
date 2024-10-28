import { User } from "../entities/user.entity";

export abstract class UserRepository {
    abstract save(user: User): Promise<void>
    abstract findByEmail(email: string): Promise<User | null>
}