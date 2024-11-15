export default class Ticket {
    id: number;
    name: string;
    used: boolean;
    session_id: number;

    constructor(id: number, name: string, used: boolean, session_id: number){
        this.id = id;
        this.name = name;
        this.used = used;
        this.session_id = session_id;
    }
}