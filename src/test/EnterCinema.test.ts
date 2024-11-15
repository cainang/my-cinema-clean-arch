import Cinema from "../core/entity/Cinema";
import CinemaUseCase from "../core/usecases/CinemaUseCase";
import CinemaRepositoryMemory from "../infra/repository/CinemaRepositoryMemory";

function makeCinema(): {
  cinemaRepositoryMemory: CinemaRepositoryMemory;
  cinemaUseCase: CinemaUseCase;
} {
  const cinemaRepositoryMemory = new CinemaRepositoryMemory();
  const cinemaUseCase = new CinemaUseCase(cinemaRepositoryMemory);

  return {
    cinemaRepositoryMemory,
    cinemaUseCase,
  };
}

test("Should get one cinema", async function () {
  const { cinemaUseCase } = makeCinema();
  let query = await cinemaUseCase.get(1);
  expect(query.id).toBe(1);
});

test("Should get all cinemas", async function () {
  const { cinemaUseCase } = makeCinema();
  let query = await cinemaUseCase.getAll();

  expect(query.length).toBeGreaterThan(0);
});

test("Should create one cinema", async function () {
  const { cinemaUseCase } = makeCinema();
  let newCinema = new Cinema(2, "Cinema Concorrente", "Av. Avenida, 332");

  let query = await cinemaUseCase.save(newCinema);
  expect(query).toBe(newCinema);
});

test("Should edit one cinema", async function () {
  const { cinemaUseCase } = makeCinema();
  let queryGet = await cinemaUseCase.get(1);

  let newCinema = new Cinema(queryGet.id, queryGet.name, "Av. Outra rua, 332");

  let queryEdit = await cinemaUseCase.edit(newCinema);
  let queryGetVal = await cinemaUseCase.get(1);

  expect(queryGetVal).toBe(newCinema);
});
