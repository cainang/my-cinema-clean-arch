import User from "../entity/User";

export default interface UserRepository {
    getAll(): Promise<User[]>;
    get(id: number): Promise<User | undefined>;
    save(user: User): Promise<User>;
    edit(user: User): Promise<User>;
}