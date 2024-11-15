import { RoomDto } from "../../core/dto/RoomDto";
import Room from "../../core/entity/Room";
import RoomRepository from "../../core/repository/RoomRepository";

export default class RoomRepositoryMemory implements RoomRepository {

    Rooms: RoomDto[] = [
        {
            id: 1,
            name: "Sala 1",
            capacity: 0,
            maxCapacity: 50,
            cinema_id: 1
        }
    ];

    get(id: number): Promise<RoomDto> {
        let RoomSearched = this.Rooms.find(room => room.id === id);
        return Promise.resolve(RoomSearched);
    }

    getAll(): Promise<RoomDto[]> {
        return Promise.resolve(this.Rooms);
    }

    save(room: Room): Promise<RoomDto> {
        this.Rooms.push(room);
        return Promise.resolve(room);
    }

    edit(room: Room): Promise<RoomDto> {
        let RoomSearched = this.Rooms.findIndex(roomShe => roomShe.id === room.id);
        if (RoomSearched == -1) throw new Error("The room not exists");

        this.Rooms[RoomSearched] = room;
        
        return Promise.resolve(this.Rooms[RoomSearched]);
    }
}