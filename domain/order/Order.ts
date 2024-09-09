import { OrderDetail } from './OrderDetail';

export class Order {
  constructor(
    public id: string,
    public customerId: string,
    public orderDate: Date,
    public details: OrderDetail[]
  ) {}

  get totalAmount(): number {
    return this.details.reduce((sum, detail) => sum + detail.subtotal, 0);
  }
}