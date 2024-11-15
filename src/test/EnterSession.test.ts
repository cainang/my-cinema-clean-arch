import Film from "../core/entity/Film";
import SessionFilm from "../core/entity/SessionFilm";
import SessionFilmUseCase from "../core/usecases/SessionFilmUseCase";
import SessionFilmRepositoryMemory from "../infra/repository/SessionFilmRepositoryMemory";

function makeSessionFilm(): {
  sessionFilmRepository: SessionFilmRepositoryMemory;
  sessionFilmUseCase: SessionFilmUseCase;
} {
  const sessionFilmRepository = new SessionFilmRepositoryMemory();
  const sessionFilmUseCase = new SessionFilmUseCase(sessionFilmRepository);

  return {
    sessionFilmRepository,
    sessionFilmUseCase,
  };
}

test("Should get one session", async function () {
  const { sessionFilmUseCase } = makeSessionFilm();
  let query = await sessionFilmUseCase.get(1);
  expect(query.film.name).toBe("The Godfather");
});

test("Should get all sessions", async function () {
  const { sessionFilmUseCase } = makeSessionFilm();
  let query = await sessionFilmUseCase.getAll();

  expect(query.length).toBeGreaterThan(0);
});

test("Should create one session", async function () {
  const { sessionFilmUseCase } = makeSessionFilm();
  let newFilm = new Film(2, "O Diabo Veste Prada", "Crime", "02:00");
  let date = new Date().toLocaleDateString();
  let newSession = new SessionFilm(2, newFilm, "15:00", "18:00", date, 9.2, 1);
  let query = await sessionFilmUseCase.save(newSession);
  expect(query).toBe(newSession);
});
