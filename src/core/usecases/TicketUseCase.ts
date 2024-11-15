import Ticket from "../entity/Ticket";
import TicketRepository from "../repository/TicketRepository";

export default class TicketUseCase {
    constructor(private readonly ticketRepository: TicketRepository) {}

    async get(id: number): Promise<Ticket> {
        return await this.ticketRepository.get(id);
    }

    async getAll(): Promise<Ticket[]> {
        return await this.ticketRepository.getAll();
    }

    async buy(ticket: Ticket): Promise<Ticket> {
        return await this.ticketRepository.buy(ticket);
    }

    async enter(id: number): Promise<boolean> {
        return await this.ticketRepository.enter(id);
    }
}