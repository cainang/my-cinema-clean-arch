import Film from "./Film";

export default class SessionFilm {
    
    id: number;
    film: Film;
    openHour: string;
    closeHour: string;
    date: string;
    price: number;
    room_id: number;

    constructor(id: number, film: Film, openHour: string, closeHour: string, date: string, price: number, room_id: number){
        if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/.test(openHour)) throw new Error('Invalid open hour');
        if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/.test(closeHour)) throw new Error('Invalid close hour');
        if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(date)) throw new Error('Invalid date');
        this.id = id;
        this.film = film;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.date = date;
        this.price = price;
        this.room_id = room_id;
    }

    
}