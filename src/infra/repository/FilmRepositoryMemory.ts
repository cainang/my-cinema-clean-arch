import Film from "../../core/entity/Film";
import FilmRepository from "../../core/repository/FilmRepository";

export default class FilmRepositoryMemory implements FilmRepository{
    
    Films = [
        {
            id: 1,
            name: "The Godfather",
            category: "Crime",
            timeDuration: "02:00"
        }
    ];

    get(id: number): Promise<Film> {
        let Film = this.Films.find(film => film.id === id);
        return Promise.resolve(Film);
    }

    getAll(): Promise<Film[]> {
        return Promise.resolve(this.Films);
    }

    save(film: Film): Promise<Film> {
        this.Films.push(film);
        return Promise.resolve(film);
    }
}