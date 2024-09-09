import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetAllProductUseCase } from "../application/GetAllProductUseCase";
import { GetByIdProductUseCase } from "../application/GetByIdProductUseCase";
import { DeleteProductUseCase } from "../application/DeleteProductUseCase";
import { PutProductUseCase } from "../application/PutProductUseCase";

import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { GetByIdProductController } from "./controllers/GetByIdProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { PutProductController } from "./controllers/PutProductController";

import { MysqlProductRepository } from "./MysqlProductRepository";

// Instancia del repositorio de productos
export const mysqlProductRepository = new MysqlProductRepository();

// Instancia de los casos de uso
export const createProductUseCase = new CreateProductUseCase(
  mysqlProductRepository
);
export const getAllProductUseCase = new GetAllProductUseCase(
  mysqlProductRepository
);
export const getByIdProductUseCase = new GetByIdProductUseCase(
  mysqlProductRepository
);
export const deleteProductUseCase = new DeleteProductUseCase(
  mysqlProductRepository
);
export const putProductUseCase = new PutProductUseCase(
  mysqlProductRepository
);

// Instancia de los controladores
export const createProductController = new CreateProductController(
  createProductUseCase
);
export const getAllProductController = new GetAllProductController(
  getAllProductUseCase
);
export const getByIdProductController = new GetByIdProductController(
  getByIdProductUseCase
);
export const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);
export const putProductController = new PutProductController(
  putProductUseCase
);
