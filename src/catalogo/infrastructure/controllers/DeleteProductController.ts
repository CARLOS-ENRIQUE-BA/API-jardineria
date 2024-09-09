import { Request, Response } from "express";
import { DeleteProductUseCase } from "../../application/DeleteProductUseCase";

export class DeleteProductController {
  constructor(readonly deleteProductUseCase: DeleteProductUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const product = await this.deleteProductUseCase.run(id);

      if (product)
        // Code HTTP: 200 -> Deletion successful
        res.status(200).send({
          status: "success",
          data: {
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            stock: product.stock,
          },
        });
      else
        res.status(404).send({
          status: "error",
          msn: "No se encontró el producto",
        });
    } catch (error) {
      // Code HTTP: 500 Internal Server Error
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
