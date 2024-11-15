import Cinema from "../core/entity/Cinema";
import Film from "../core/entity/Film";
import Room from "../core/entity/Room";
import SessionFilm from "../core/entity/SessionFilm";
import Ticket from "../core/entity/Ticket";
import User from "../core/entity/User";
import CinemaUseCase from "../core/usecases/CinemaUseCase";
import FilmUseCase from "../core/usecases/FilmUseCase";
import RoomUseCase from "../core/usecases/RoomUseCase";
import SessionFilmUseCase from "../core/usecases/SessionFilmUseCase";
import TicketUseCase from "../core/usecases/TicketUseCase";
import UserUseCase from "../core/usecases/UserUseCase";
import CinemaRepositoryMemory from "../infra/repository/CinemaRepositoryMemory";
import FilmRepositoryMemory from "../infra/repository/FilmRepositoryMemory";
import RoomRepositoryMemory from "../infra/repository/RoomRepositoryMemory";
import SessionFilmRepositoryMemory from "../infra/repository/SessionFilmRepositoryMemory";
import TicketRepositoryMemory from "../infra/repository/TicketRepositoryMemory";
import UserRepositoryMemory from "../infra/repository/UserRepositoryMemory";

test("Should make a flow", async function () {
  const userRepositoryMemory = new UserRepositoryMemory();
  const userUseCase = new UserUseCase(userRepositoryMemory);
  const cinemaRepositoryMemory = new CinemaRepositoryMemory();
  const cinemaUseCase = new CinemaUseCase(cinemaRepositoryMemory);
  const roomRepositoryMemory = new RoomRepositoryMemory();
  const roomUseCase = new RoomUseCase(roomRepositoryMemory);
  const filmRepositoryMemory = new FilmRepositoryMemory();
  const filmUseCase = new FilmUseCase(filmRepositoryMemory);
  const sessionFilmRepositoryMemory = new SessionFilmRepositoryMemory();
  const sessionFilmUseCase = new SessionFilmUseCase(
    sessionFilmRepositoryMemory
  );

  const ticketRepositoryMemory = new TicketRepositoryMemory();
  const ticketUseCase = new TicketUseCase(ticketRepositoryMemory);

  let newUser = new User(2, "Testador", "teste@teste.com", "1234", "ADM");
  let queryCreateUser = await userUseCase.save(newUser);

  let newCinema = new Cinema(2, "Cinema Amigos", "Rua Aculá, 1232");
  let queryCreateCinema = await cinemaUseCase.save(newCinema);

  let newRoom = new Room(2, "Sala 1", 0, 3, queryCreateCinema.id);
  let queryCreateRoom = await roomUseCase.save(newRoom);

  let newFilm = new Film(2, "Jogador  Nº 1", "Ação, Ficção", "01:23:30");
  let queryCreateFilm = await filmUseCase.save(newFilm);

  let newSession = new SessionFilm(
    2,
    queryCreateFilm,
    "13:00",
    "14:24",
    "14/11/2024",
    30.23,
    queryCreateRoom.id
  );
  let queryCreateSession = await sessionFilmUseCase.save(newSession);

  // Criando experiencia do cliente

  // Cliente compra o ingresso
  let newTicket = new Ticket(2, "Cainan Silva", false, queryCreateSession.id);
  let queryBuyTicket = await ticketUseCase.buy(newTicket);

  // Cliente entra na sessão
  let queryEnterSession = await ticketUseCase.enter(queryBuyTicket.id);

  expect(queryEnterSession).toBe(true);
});
