import { Request, Response } from "express";
import { PutProductUseCase } from "../../application/PutProductUseCase";

export class PutProductController {
  constructor(readonly putProductUseCase: PutProductUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const product = await this.putProductUseCase.run(
        id,
        data.nombre,
        data.descripcion,
        data.precio,
        data.stock
      );

      if (product)
        res.status(200).send({
          status: "success",
          data: {
            id: product?.id,
            nombre: product?.nombre,
            descripcion: product?.descripcion,
            precio: product?.precio,
            stock: product?.stock,
          },
        });
      else
        res.status(404).send({
          status: "error",
          data: "No fue posible actualizar el producto",
        });
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
