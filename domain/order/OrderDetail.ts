export class OrderDetail {
    constructor(
      public productId: string,
      public quantity: number,
      public unitPrice: number
    ) {}

    get subtotal(): number {
      return this.quantity * this.unitPrice;
    }
  }