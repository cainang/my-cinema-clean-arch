import Film from "../entity/Film";
import FilmRepository from "../repository/FilmRepository";

export default class FilmUseCase {
  constructor(private readonly filmRepository: FilmRepository) {}

  async get(id: number): Promise<Film> {
    return await this.filmRepository.get(id);
  }

  async getAll(): Promise<Film[]> {
    return await this.filmRepository.getAll();
  }

  async save(newFilm: Film): Promise<Film> {
    return await this.filmRepository.save(newFilm);
  }
}
