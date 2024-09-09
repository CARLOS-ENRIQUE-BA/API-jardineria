import { Request, Response } from "express";
import { GetAllProductUseCase } from "../../application/GetAllProductUseCase";

export class GetAllProductController {
  constructor(readonly getAllProductUseCase: GetAllProductUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const products = await this.getAllProductUseCase.run();
      console.log(products);
      if (products)
        res.status(200).send({
          status: "success",
          data: products.map((product: any) => {
            return {
              id: product.id,
              nombre: product.nombre,
              descripcion: product.descripcion,
              precio: product.precio,
              stock: product.stock,
            };
          }),
        });
      else
        res.status(404).send({
          status: "error",
          msn: "No se encontraron productos",
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
