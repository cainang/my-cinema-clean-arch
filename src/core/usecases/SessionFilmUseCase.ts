import SessionFilm from "../entity/SessionFilm";
import SessionFilmRepository from "../repository/SessionFilmRepository";

export default class SessionFilmUseCase {
  constructor(private sessionFilmRepository: SessionFilmRepository) {}

  async get(id: number): Promise<SessionFilm> {
    return await this.sessionFilmRepository.get(id);
  }

  async getAll(): Promise<SessionFilm[]> {
    return await this.sessionFilmRepository.getAll();
  }

  async save(newSession: SessionFilm): Promise<SessionFilm> {
    return await this.sessionFilmRepository.save(newSession);
  }

  /* async enter(id: number): Promise<SessionFilm> {
        const session = await this.sessionFilmRepository.get(id);
        const room = await this.roomRepository.get(session.room_id);
        
        if (session == undefined) throw new Error("The session not exists");
        if (room == undefined) throw new Error("The room not exists");
        const roomEnter = room.enter();
        if (!roomEnter) throw new Error("The room is full");
        
        const ticket = await this.ticketRepository.enter(ticket_id);
        if (!ticket) throw new Error("Ticket not used");
        

        return await this.sessionFilmRepository.enter(id);
    } */
}
