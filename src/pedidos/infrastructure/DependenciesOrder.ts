import { CreateOrderUseCase } from "../application/CreateOrderUseCase";
import { GetAllOrderUseCase } from "../application/GetAllOrderUseCase";
import { GetByIdOrderUseCase } from "../application/GetByIdOrderUseCase";
import { DeleteOrderUseCase } from "../application/DeleteOrderUseCase";
import { PutOrderUseCase } from "../application/PutOrderUseCase";

import { CreateOrderController } from "./controllers/CreateOrderController";
import { GetAllOrderController } from "./controllers/GetAllOrderController";
import { GetByIdOrderController } from "./controllers/GetByIdOrderController";
import { DeleteOrderController } from "./controllers/DeleteOrderController";
import { PutOrderController } from "./controllers/PutOrderController";

import { MysqlOrderRepository } from "./MysqlOrderRepository";

// Instancia del repositorio de pedidos
export const mysqlOrderRepository = new MysqlOrderRepository();

// Instancia de los casos de uso
export const createOrderUseCase = new CreateOrderUseCase(
  mysqlOrderRepository
);
export const getAllOrderUseCase = new GetAllOrderUseCase(
  mysqlOrderRepository
);
export const getByIdOrderUseCase = new GetByIdOrderUseCase(
  mysqlOrderRepository
);
export const deleteOrderUseCase = new DeleteOrderUseCase(
  mysqlOrderRepository
);
export const putOrderUseCase = new PutOrderUseCase(
  mysqlOrderRepository
);

// Instancia de los controladores
export const createOrderController = new CreateOrderController(
  createOrderUseCase
);
export const getAllOrderController = new GetAllOrderController(
  getAllOrderUseCase
);
export const getByIdOrderController = new GetByIdOrderController(
  getByIdOrderUseCase
);
export const deleteOrderController = new DeleteOrderController(
  deleteOrderUseCase
);
export const putOrderController = new PutOrderController(
  putOrderUseCase
);
