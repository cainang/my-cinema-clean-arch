import { RoomDto } from "../dto/RoomDto";
import Room from "../entity/Room";
import RoomRepository from "../repository/RoomRepository";

export default class RoomUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async get(id: number): Promise<RoomDto> {
        return await this.roomRepository.get(id);
    }

    async getAll(): Promise<RoomDto[]> {
        return await this.roomRepository.getAll();
    }

    async save(newRoom: Room): Promise<RoomDto> {
        return await this.roomRepository.save(newRoom);
    }

    async edit(room: Room): Promise<RoomDto> {
        return await this.roomRepository.edit(room);
    }
}