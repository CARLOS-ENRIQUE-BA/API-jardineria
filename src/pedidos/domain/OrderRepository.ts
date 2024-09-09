import { Order } from "./Order";

export interface OrderRepository {
  getAll(): Promise<Order[] | null>;
  getById(orderId: number): Promise<Order | null>;
  delete(orderId: number): Promise<Order | null>;
  update(
    orderId: number,
    producto: string,
    cantidad: number,
    precio: number,
    estado: string
  ): Promise<Order | null>;
  create(
    producto: string,
    cantidad: number,
    precio: number,
    estado: string
  ): Promise<Order | null>;
}
