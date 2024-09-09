import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class GetByIdOrderUseCase {
  constructor(readonly orderRepository: OrderRepository) {}

  async run(id: number): Promise<Order | null> {
    try {
      const result = await this.orderRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
