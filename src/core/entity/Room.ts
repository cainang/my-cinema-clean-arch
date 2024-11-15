export default class Room {
    id: number;
    name: string;
    capacity: number;
    maxCapacity: number;
    cinema_id: number;

    constructor(id: number, name: string, capacity: number, maxCapacity: number, cinema_id: number){
        if (capacity > maxCapacity) throw new Error('Invalid capacity to room!');
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.maxCapacity = maxCapacity;
        this.cinema_id = cinema_id;
    }

    isFull() {
        return (this.capacity >= this.maxCapacity);
    }

    enter() {
        if (this.isFull()) {
            return false;
        }

        this.capacity++;

        return true;
    }
}