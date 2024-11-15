import User from "../core/entity/User";
import UserUseCase from "../core/usecases/UserUseCase";
import UserRepositoryMemory from "../infra/repository/UserRepositoryMemory";

function makeUser(): {
  userRepositoryMemory: UserRepositoryMemory;
  userUseCase: UserUseCase;
} {
  const userRepositoryMemory = new UserRepositoryMemory();
  const userUseCase = new UserUseCase(userRepositoryMemory);

  return {
    userRepositoryMemory,
    userUseCase,
  };
}

test("Should get one user", async function () {
  const { userUseCase } = makeUser();
  let query = await userUseCase.get(1);
  expect(query.id).toBe(1);
});

test("Should get all users", async function () {
  const { userUseCase } = makeUser();
  let query = await userUseCase.getAll();

  expect(query.length).toBeGreaterThan(0);
});

test("Should create one user", async function () {
  const { userUseCase } = makeUser();
  let newUser = new User(2, "Sala 2", "email2@teste.com", "senha", "OPR");

  let query = await userUseCase.save(newUser);
  expect(query).toBe(newUser);
});

test("Should edit one user", async function () {
  const { userUseCase } = makeUser();
  let queryGet = await userUseCase.get(1);

  let newUser = new User(
    1,
    "Cainan Silva",
    queryGet.email,
    queryGet.password,
    queryGet.type
  );

  let queryEdit = await userUseCase.edit(newUser);
  let queryGetVal = await userUseCase.get(1);

  expect(queryGetVal).toBe(newUser);
});
