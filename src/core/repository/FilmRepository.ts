import Film from "../entity/Film";

export default interface FilmRepository {
  getAll(): Promise<Film[]>;
  get(id: number): Promise<Film | undefined>;
  save(film: Film): Promise<Film>;
}
