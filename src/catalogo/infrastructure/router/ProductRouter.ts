import express from "express";
import { createProductController } from "../DependenciesProduct";
import { getAllProductController } from "../DependenciesProduct";
import { getByIdProductController } from "../DependenciesProduct";
import { deleteProductController } from "../DependenciesProduct";
import { putProductController } from "../DependenciesProduct";

export const productRouter = express.Router();

productRouter.get(
  "/",
  getAllProductController.run.bind(getAllProductController)
);
productRouter.get(
  "/:id",
  getByIdProductController.run.bind(getByIdProductController)
);
productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
);
productRouter.delete(
  "/:id",
  deleteProductController.run.bind(deleteProductController)
);
productRouter.put(
  "/:id",
  putProductController.run.bind(putProductController)
);
