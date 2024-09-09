import { Product } from "./Product";

export interface ProductRepository {
  getAll(): Promise<Product[] | null>;
  getById(productId: number): Promise<Product | null>;
  delete(productId: number): Promise<Product | null>;
  update(
    productId: number,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ): Promise<Product | null>;
  create(
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ): Promise<Product | null>;
}
