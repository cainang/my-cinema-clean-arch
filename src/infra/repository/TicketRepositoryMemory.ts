import Ticket from "../../core/entity/Ticket";
import TicketRepository from "../../core/repository/TicketRepository";

export default class TicketRepositoryMemory implements TicketRepository {

    Tickets: Ticket[] = [
        {
            id: 1,
            name: "Cainã G. Silva",
            session_id: 1,
            used: false
        }
    ];

    get(id: number): Promise<Ticket> {
        let TicketSearched = this.Tickets.find(ticket => ticket.id === id);
        return Promise.resolve(TicketSearched);
    }

    getAll(): Promise<Ticket[]> {
        return Promise.resolve(this.Tickets);
    }

    buy(ticket: Ticket): Promise<Ticket> {
        this.Tickets.push(ticket);
        return Promise.resolve(ticket);
    }

    enter(id: number): Promise<boolean> {
        let TicketSearched = this.Tickets.findIndex(ticket => ticket.id === id);
        if (TicketSearched == -1) throw new Error("The ticket not exists");

        this.Tickets[TicketSearched].used = true;
        
        return Promise.resolve(true);
    }
}