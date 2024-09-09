import { Customer } from "@/domain/customer/Customer";
import { ICustomerRepository } from "@/domain/customer/ICustomerRepository";

export class FetchCustomers {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(): Promise<Customer[]> {
    return await this.customerRepository.findAll();
  }
}
