"use client";
import { FetchCustomers } from "@/application/FetchCustomers";
import { CustomerFirestoreRepository } from "@/infrastructure/firebase/repositories/FSCustomerRepository";
import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm();

  const searchCustomers = async () => {
    const fetchCustomers = new FetchCustomers(
      new CustomerFirestoreRepository()
    );
    const customers = await fetchCustomers.execute();
    console.log(customers);
  };
  return (
    <form onSubmit={handleSubmit(searchCustomers)}>
      <h1>得意先管理</h1>
      <button type="submit">検索</button>
    </form>
  );
}
