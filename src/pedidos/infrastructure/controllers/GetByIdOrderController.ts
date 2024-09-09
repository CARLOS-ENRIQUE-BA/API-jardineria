import { Request, Response } from "express";
import { GetByIdOrderUseCase } from "../../application/GetByIdOrderUseCase";

export class GetByIdOrderController {
  constructor(readonly getByIdOrderUseCase: GetByIdOrderUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const order = await this.getByIdOrderUseCase.run(id);

      if (order)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: order.id,
            producto: order.producto,
            cantidad: order.cantidad,
            precio: order.precio,
            estado: order.estado,
          },
        });
      else
        res.status(404).send({
          status: "error",
          msn: "No se encontró el pedido",
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
