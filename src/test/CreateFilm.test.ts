import Film from "../core/entity/Film";
import FilmUseCase from "../core/usecases/FilmUseCase";
import FilmRepositoryMemory from "../infra/repository/FilmRepositoryMemory";

function makeFilm(): {
  filmRepository: FilmRepositoryMemory;
  filmUseCase: FilmUseCase;
} {
  const filmRepository = new FilmRepositoryMemory();
  const filmUseCase = new FilmUseCase(filmRepository);

  return {
    filmRepository,
    filmUseCase,
  };
}

test("Should create film", async function () {
  const { filmUseCase } = makeFilm();
  let newFilm = new Film(2, "O Diabo Veste Prada", "Crime", "02:00");
  let query = await filmUseCase.save(newFilm);
  expect(query).toBe(newFilm);
});

test("Should get one film", async function () {
  const { filmUseCase } = makeFilm();
  let query = await filmUseCase.get(1);
  expect(query.name).toBe("The Godfather");
});

test("Should get all film", async function () {
  const { filmUseCase } = makeFilm();
  let query = await filmUseCase.getAll();
  expect(query.length).toBe(1);
});
