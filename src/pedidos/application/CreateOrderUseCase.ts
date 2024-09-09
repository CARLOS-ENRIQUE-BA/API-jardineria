import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class CreateOrderUseCase {
  constructor(readonly orderRepository: OrderRepository) {}

  async run(
    producto: string,
    cantidad: number,
    precio: number,
    estado: string
  ): Promise<Order | null> {
    try {
      const order = await this.orderRepository.create(
        producto,
        cantidad,
        precio,
        estado
      );
      return order;
    } catch (error) {
      return null;
    }
  }
}
