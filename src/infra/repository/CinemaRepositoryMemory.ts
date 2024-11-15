import Cinema from "../../core/entity/Cinema";
import CinemaRepository from "../../core/repository/CinemaRepository";

export default class CinemaRepositoryMemory implements CinemaRepository {

    Cinemas: Cinema[] = [
        {
            id: 1,
            name: "Cinema Dois Irmaos",
            location: "Av. Rio Branco, 123, Narnia"
        }
    ];

    get(id: number): Promise<Cinema> {
        let CinemaSearched = this.Cinemas.find(cinema => cinema.id === id);
        return Promise.resolve(CinemaSearched);
    }

    getAll(): Promise<Cinema[]> {
        return Promise.resolve(this.Cinemas);
    }

    save(cinema: Cinema): Promise<Cinema> {
        this.Cinemas.push(cinema);
        return Promise.resolve(cinema);
    }

    edit(cinema: Cinema): Promise<Cinema> {
        let CinemaSearched = this.Cinemas.findIndex(cinemaShea => cinemaShea.id === cinema.id);
        if (CinemaSearched == -1) throw new Error("The cinema not exists");

        this.Cinemas[CinemaSearched] = cinema;
        
        return Promise.resolve(this.Cinemas[CinemaSearched]);
    }
}