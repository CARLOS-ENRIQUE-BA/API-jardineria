import { query } from "../../database/mysql";
import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class MysqlOrderRepository implements OrderRepository {
  async getAll(): Promise<Order[] | null> {
    const sql = "SELECT * FROM orders";
    try {
      const [data]: any = await query(sql, []);
      const dataOrders = Object.values(JSON.parse(JSON.stringify(data)));

      return dataOrders.map(
        (order: any) =>
          new Order(
            order.id,
            order.producto,
            order.cantidad,
            order.precio,
            order.estado
          )
      );
    } catch (error) {
      console.error("Error retrieving orders: ", error);
      return null;
    }
  }

  async getById(id: number): Promise<Order | null> {
    const sql = "SELECT * FROM orders WHERE id=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      if (result.length > 0) {
        return new Order(
          result[0].id,
          result[0].producto,
          result[0].cantidad,
          result[0].precio,
          result[0].estado
        );
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error retrieving order by ID: ", error);
      return null;
    }
  }

  async create(
    producto: string,
    cantidad: number,
    precio: number,
    estado: string
  ): Promise<Order | null> {
    if (!producto || cantidad === undefined || precio === undefined || !estado) {
      throw new Error("Todos los campos son obligatorios.");
    }
    const sql = "INSERT INTO orders (producto, cantidad, precio, estado) VALUES (?, ?, ?, ?)";
    const params: any[] = [producto, cantidad, precio, estado];
    try {
      const [result]: any = await query(sql, params);
      return new Order(result.insertId, producto, cantidad, precio, estado);
    } catch (error) {
      console.error("Error creating order: ", error);
      return null;
    }
  }

  async update(
    id: number,
    producto: string,
    cantidad: number,
    precio: number,
    estado: string
  ): Promise<Order | null> {
    if (!producto || cantidad === undefined || precio === undefined || !estado) {
      throw new Error("Todos los campos son obligatorios.");
    }
    const sql = "UPDATE orders SET producto=?, cantidad=?, precio=?, estado=? WHERE id=?";
    const params: any[] = [producto, cantidad, precio, estado, id];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows > 0) {
        return new Order(id, producto, cantidad, precio, estado);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error updating order: ", error);
      return null;
    }
  }

  async delete(id: number): Promise<Order | null> {
    const sql = "DELETE FROM orders WHERE id=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows > 0) {
        return { id } as unknown as Order;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error deleting order: ", error);
      return null;
    }
  }
}
