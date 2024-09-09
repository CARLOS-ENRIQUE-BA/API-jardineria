export class Order {
    constructor(
      readonly id: number,
      readonly producto: string,
      readonly cantidad: number,
      readonly precio: number,
      readonly estado: string
    ) {}
  }
  