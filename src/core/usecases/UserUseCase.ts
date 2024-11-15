import User from "../entity/User";
import UserRepository from "../repository/UserRepository";

export default class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async get(id: number): Promise<User> {
    return await this.userRepository.get(id);
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.getAll();
  }

  async save(newUser: User): Promise<User> {
    return await this.userRepository.save(newUser);
  }

  async edit(user: User): Promise<User> {
    return await this.userRepository.edit(user);
  }
}
