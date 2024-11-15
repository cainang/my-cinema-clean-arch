import SessionFilm from "../../core/entity/SessionFilm";
import SessionFilmRepository from "../../core/repository/SessionFilmRepository";

export default class SessionFilmRepositoryMemory implements SessionFilmRepository {

    SessionsFilm: SessionFilm[] = [
        {
            id: 1,
            film: {id: 1, name: "The Godfather", category: "Crime", timeDuration: "02:00"},
            openHour: "14:00",
            closeHour: "16:00",
            date: "10-10-2020",
            price: 10.59,
            room_id: 1
        }
    ];

    get(id: number): Promise<SessionFilm> {
        let Session = this.SessionsFilm.find(session => session.film.id === id);
        return Promise.resolve(Session);
    }

    getAll(): Promise<SessionFilm[]> {
        return Promise.resolve(this.SessionsFilm);
    }

    save(session: SessionFilm): Promise<SessionFilm> {
        this.SessionsFilm.push(session);
        return Promise.resolve(session);
    }

    /* enter(id: number): Promise<SessionFilm> {
        let Session = this.SessionsFilm.find(session => session.film.id === id);
        if (Session == undefined) throw new Error("The session not exists");
        
        return Promise.resolve(Session);
    } */
}