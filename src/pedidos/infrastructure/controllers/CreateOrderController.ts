import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../application/CreateOrderUseCase";

export class CreateOrderController {
  constructor(readonly createOrderUseCase: CreateOrderUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const order = await this.createOrderUseCase.run(
        data.producto,
        data.cantidad,
        data.precio,
        data.estado
      );

      if (order)
        res.status(201).send({
          status: "success",
          data: {
            id: order?.id,
            producto: order?.producto,
            cantidad: order?.cantidad,
            precio: order?.precio,
            estado: order?.estado,
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
