import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class CreateProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.create(
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
