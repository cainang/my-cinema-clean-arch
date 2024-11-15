import User from "../../core/entity/User";
import UserRepository from "../../core/repository/UserRepository";

export default class UserRepositoryMemory implements UserRepository {

    Users: User[] = [
        {
            id: 1,
            name: "Cainã",
            email: "teste@teste.com",
            password: "123@mas",
            type: "ADM"
        }
    ];

    get(id: number): Promise<User> {
        let UserSearched = this.Users.find(user => user.id === id);
        return Promise.resolve(UserSearched);
    }

    getAll(): Promise<User[]> {
        return Promise.resolve(this.Users);
    }

    save(user: User): Promise<User> {
        this.Users.push(user);
        return Promise.resolve(user);
    }

    edit(user: User): Promise<User> {
        let UserSearched = this.Users.findIndex(userShea => userShea.id === user.id);
        if (UserSearched == -1) throw new Error("The user not exists");

        this.Users[UserSearched] = user;
        
        return Promise.resolve(this.Users[UserSearched]);
    }
}