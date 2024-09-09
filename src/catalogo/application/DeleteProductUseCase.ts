import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class DeleteProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(id: number): Promise<Product | null> {
    try {
      const result = await this.productRepository.delete(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
