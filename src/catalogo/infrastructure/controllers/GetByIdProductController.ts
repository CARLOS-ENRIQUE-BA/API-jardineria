import { Request, Response } from "express";
import { GetByIdProductUseCase } from "../../application/GetByIdProductUseCase";

export class GetByIdProductController {
  constructor(readonly getByIdProductUseCase: GetByIdProductUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const product = await this.getByIdProductUseCase.run(id);

      if (product)
        // Code HTTP: 200 -> Consulta exitosa
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
