import Ticket from "../core/entity/Ticket";
import SessionFilmUseCase from "../core/usecases/SessionFilmUseCase";
import TicketUseCase from "../core/usecases/TicketUseCase";
import SessionFilmRepositoryMemory from "../infra/repository/SessionFilmRepositoryMemory";
import TicketRepositoryMemory from "../infra/repository/TicketRepositoryMemory";

function makeTicket(): {
  ticketRepositoryMemory: TicketRepositoryMemory;
  ticketUseCase: TicketUseCase;
  sessionFilmRepository: SessionFilmRepositoryMemory;
  sessionFilmUseCase: SessionFilmUseCase;
} {
  const ticketRepositoryMemory = new TicketRepositoryMemory();
  const ticketUseCase = new TicketUseCase(ticketRepositoryMemory);

  const sessionFilmRepository = new SessionFilmRepositoryMemory();
  const sessionFilmUseCase = new SessionFilmUseCase(sessionFilmRepository);

  return {
    ticketRepositoryMemory,
    ticketUseCase,
    sessionFilmRepository,
    sessionFilmUseCase,
  };
}

test("Should buy one ticket", async function () {
  const { ticketUseCase } = makeTicket();
  let query = await ticketUseCase.get(1);
  expect(query.name).toBe("Cainã G. Silva");
});

test("Should get all tickets", async function () {
  const { ticketUseCase } = makeTicket();
  let query = await ticketUseCase.getAll();

  expect(query.length).toBeGreaterThan(0);
});

test("Should buy one ticket", async function () {
  const { ticketUseCase, sessionFilmUseCase } = makeTicket();
  let session = await sessionFilmUseCase.get(1);
  let ticket = new Ticket(2, "Teste da Silva", false, session.id);

  let query = await ticketUseCase.buy(ticket);
  expect(query).toBe(ticket);
});

test("Should enter in session with a ticket", async function () {
  const { ticketUseCase } = makeTicket();

  let query = await ticketUseCase.enter(1);

  expect(query).toBe(true);
});
