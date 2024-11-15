import Film from "../entity/Film";

export interface SessionFilmDto {
    film: Film;
    openHour: string;
    closeHour: string;
    capacity: number;
    maxCapacity: number;
    isFull: () => boolean;
}