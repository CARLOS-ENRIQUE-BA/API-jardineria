import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class GetAllOrderUseCase {
  constructor(readonly orderRepository: OrderRepository) {}

  async run(): Promise<Order[] | null> {
    try {
      const result = await this.orderRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
