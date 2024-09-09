import express from "express";
import { Signale } from "signale";
import cors from "cors";
import { productRouter } from "./catalogo/infrastructure/router/ProductRouter";
import { orderRouter } from "./pedidos/infrastructure/router/OrderRouter"; // Ajusta la ruta según la ubicación del archivo

const app = express();

const signale = new Signale();

app.use(express.json());
app.use(cors());

// Rutas
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(3003, () => {
  signale.success("Server online on port 3003");
});
