import { User } from "../entities/user.entity";

export abstract class UserService {
    abstract register(user: User): Promise<void>
}