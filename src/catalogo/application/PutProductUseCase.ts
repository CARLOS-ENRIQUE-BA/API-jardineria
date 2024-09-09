import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class PutProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.update(
        id,
        nombre,
        descripcion,
        precio,
        stock
      );
      return product;
    } catch (error) {
      return null;
    }
  }
}
