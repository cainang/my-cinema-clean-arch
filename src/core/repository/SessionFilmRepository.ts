import { SessionFilmDto } from "../dto/SessionFilmDto";
import SessionFilm from "../entity/SessionFilm";

export default interface SessionFilmRepository {
    getAll(): Promise<SessionFilm[]>;
    get(id: number): Promise<SessionFilm | undefined>;
    save(session: SessionFilm): Promise<SessionFilm>;
}