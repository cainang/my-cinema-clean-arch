import Cinema from "../entity/Cinema";

export default interface CinemaRepository {
    getAll(): Promise<Cinema[]>;
    get(id: number): Promise<Cinema | undefined>;
    save(cinema: Cinema): Promise<Cinema>;
    edit(cinema: Cinema): Promise<Cinema>;
}