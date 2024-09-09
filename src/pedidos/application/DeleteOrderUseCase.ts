import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class DeleteOrderUseCase {
  constructor(readonly orderRepository: OrderRepository) {}

  async run(id: number): Promise<Order | null> {
    try {
      const result = await this.orderRepository.delete(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
