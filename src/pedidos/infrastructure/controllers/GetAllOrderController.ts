import { Request, Response } from "express";
import { GetAllOrderUseCase } from "../../application/GetAllOrderUseCase";

export class GetAllOrderController {
  constructor(readonly getAllOrderUseCase: GetAllOrderUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const orders = await this.getAllOrderUseCase.run();
      console.log(orders);
      if (orders)
        res.status(200).send({
          status: "success",
          data: orders.map((order: any) => {
            return {
              id: order.id,
              producto: order.producto,
              cantidad: order.cantidad,
              precio: order.precio,
              estado: order.estado,
            };
          }),
        });
      else
        res.status(404).send({
          status: "error",
          msn: "No se encontraron pedidos",
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
