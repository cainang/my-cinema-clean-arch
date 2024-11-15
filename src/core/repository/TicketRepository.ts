import Ticket from "../entity/Ticket";

export default interface TicketRepository {
    getAll(): Promise<Ticket[]>;
    get(id: number): Promise<Ticket | undefined>;

    buy(ticket: Ticket): Promise<Ticket>;
    enter(id: number): Promise<boolean>;
}