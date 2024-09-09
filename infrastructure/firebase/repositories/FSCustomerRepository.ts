import { Customer } from "@/domain/customer/Customer";
import { ICustomerRepository } from "@/domain/customer/ICustomerRepository";
import { db } from "@/infrastructure/firebase/client";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export class CustomerFirestoreRepository implements ICustomerRepository {
  async findAll(): Promise<Customer[]> {
    const customersCollection = collection(db, "customers");
    const customersSnapshot = await getDocs(customersCollection);
    return customersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return new Customer(doc.id, data.name, data.address, data.tel);
    });
  }

  async findById(id: string): Promise<Customer | null> {
    const customerDoc = doc(db, "customers", id);
    const customerSnapshot = await getDoc(customerDoc);
    if (!customerSnapshot.exists()) return null;
    const data = customerSnapshot.data();
    return new Customer(customerSnapshot.id, data.name, data.address, data.tel);
  }

  async save(customer: Customer): Promise<void> {
    const customerDoc = doc(db, "customers", customer.id);
    await setDoc(customerDoc, {
      name: customer.name,
      email: customer.address,
    });
  }

  async update(customer: Customer): Promise<void> {
    const customerDoc = doc(db, "customers", customer.id);
    await updateDoc(customerDoc, {
      name: customer.name,
      email: customer.address,
    });
  }

  async delete(id: string): Promise<void> {
    const customerDoc = doc(db, "customers", id);
    await deleteDoc(customerDoc);
  }
}
