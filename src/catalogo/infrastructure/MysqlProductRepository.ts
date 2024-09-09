import { query } from "../../database/mysql";
import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class MysqlProductRepository implements ProductRepository {
  async getAll(): Promise<Product[] | null> {
    const sql = "SELECT * FROM products";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Product(
            product.id,
            product.nombre,
            product.descripcion,
            product.precio,
            product.stock
          )
      );
    } catch (error) {
      console.error("Error retrieving products: ", error);
      return null;
    }
  }

  async getById(id: number): Promise<Product | null> {
    const sql = "SELECT * FROM products WHERE id=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      if (result.length > 0) {
        return new Product(
          result[0].id,
          result[0].nombre,
          result[0].descripcion,
          result[0].precio,
          result[0].stock
        );
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error retrieving product by ID: ", error);
      return null;
    }
  }

  async create(
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ): Promise<Product | null> {
    if (!nombre || !descripcion || precio === undefined || stock === undefined) {
      throw new Error("Todos los campos son obligatorios.");
    }
    const sql = "INSERT INTO products (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, descripcion, precio, stock];
    try {
      const [result]: any = await query(sql, params);
      return new Product(result.insertId, nombre, descripcion, precio, stock);
    } catch (error) {
      console.error("Error creating product: ", error);
      return null;
    }
  }

  async update(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ): Promise<Product | null> {
    if (!nombre || !descripcion || precio === undefined || stock === undefined) {
      throw new Error("Todos los campos son obligatorios.");
    }
    const sql = "UPDATE products SET nombre=?, descripcion=?, precio=?, stock=? WHERE id=?";
    const params: any[] = [nombre, descripcion, precio, stock, id];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows > 0) {
        return new Product(id, nombre, descripcion, precio, stock);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error updating product: ", error);
      return null;
    }
  }

  async delete(id: number): Promise<Product | null> {
    const sql = "DELETE FROM products WHERE id=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows > 0) {
        return { id } as unknown as Product; 
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
      return null;
    }
  }
}
