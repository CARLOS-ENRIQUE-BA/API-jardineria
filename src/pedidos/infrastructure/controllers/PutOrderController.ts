import { Request, Response } from "express";
import { PutOrderUseCase } from "../../application/PutOrderUseCase";

export class PutOrderController {
  constructor(readonly putOrderUseCase: PutOrderUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const order = await this.putOrderUseCase.run(
        id,
        data.producto,
        data.cantidad,
        data.precio,
        data.estado
      );

      if (order)
        res.status(200).send({
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
        res.status(404).send({
          status: "error",
          data: "No fue posible actualizar el pedido",
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
