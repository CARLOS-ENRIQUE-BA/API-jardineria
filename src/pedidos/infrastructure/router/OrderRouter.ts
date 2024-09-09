import express from "express";
import { createOrderController } from "../DependenciesOrder";
import { getAllOrderController } from "../DependenciesOrder";
import { getByIdOrderController } from "../DependenciesOrder";
import { deleteOrderController } from "../DependenciesOrder";
import { putOrderController } from "../DependenciesOrder";

export const orderRouter = express.Router();

orderRouter.get(
  "/",
  getAllOrderController.run.bind(getAllOrderController)
);
orderRouter.get(
  "/:id",
  getByIdOrderController.run.bind(getByIdOrderController)
);
orderRouter.post(
  "/",
  createOrderController.run.bind(createOrderController)
);
orderRouter.delete(
  "/:id",
  deleteOrderController.run.bind(deleteOrderController)
);
orderRouter.put(
  "/:id",
  putOrderController.run.bind(putOrderController)
);
