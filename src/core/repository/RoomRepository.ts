import { RoomDto } from "../dto/RoomDto";
import Room from "../entity/Room";

export default interface RoomRepository {
    getAll(): Promise<RoomDto[]>;
    get(id: number): Promise<RoomDto | undefined>;
    save(room: Room): Promise<RoomDto>;
    edit(room: Room): Promise<RoomDto>;
}