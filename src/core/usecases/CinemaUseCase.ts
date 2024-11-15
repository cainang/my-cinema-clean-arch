import Cinema from "../entity/Cinema";
import CinemaRepository from "../repository/CinemaRepository";

export default class CinemaUseCase {
  constructor(private readonly cinemaRepository: CinemaRepository) {}

  async get(id: number): Promise<Cinema> {
    return await this.cinemaRepository.get(id);
  }

  async getAll(): Promise<Cinema[]> {
    return await this.cinemaRepository.getAll();
  }

  async save(newCinema: Cinema): Promise<Cinema> {
    return await this.cinemaRepository.save(newCinema);
  }

  async edit(cinema: Cinema): Promise<Cinema> {
    return await this.cinemaRepository.edit(cinema);
  }
}
