import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class PutOrderUseCase {
  constructor(readonly orderRepository: OrderRepository) {}

  async run(
    id: number,
    producto: string,
    cantidad: number,
    precio: number,
    estado: string
  ): Promise<Order | null> {
    try {
      const order = await this.orderRepository.update(
        id,
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
