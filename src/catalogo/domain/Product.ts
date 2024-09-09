export class Product {
    constructor(
      readonly id: number,
      readonly nombre: string,
      readonly descripcion: string,
      readonly precio: number,
      readonly stock: number
    ) {}
}