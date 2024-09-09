import { Customer } from '@/domain/customer/Customer';
import { ICustomerRepository } from '@/domain/customer/ICustomerRepository';

export class CreateCustomer {
  constructor(
    private customerRepository: ICustomerRepository
  ) {}

  async execute(customerData: { name: string; address: string }): Promise<Customer> {
    const newCustomer = new Customer(
      '',
      customerData.name,
      customerData.address
    );

    await this.customerRepository.save(newCustomer);
    return newCustomer;
  }
}