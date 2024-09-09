import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/CreateProductUseCase";

export class CreateProductController {
  constructor(readonly createProductUseCase: CreateProductUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const product = await this.createProductUseCase.run(
        data.nombre,
        data.descripcion,
        data.precio,
        data.stock
      );

      if (product)
        res.status(201).send({
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
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el registro",
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
