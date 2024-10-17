import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  customers = [
    { id: 1, name: 'Krishna G', gender: 'Male', contact: '1234567890', email: 'kg@example.com' },
  ];

  products = [
    { id: 1, name: 'Product 1', price: 50, quantity: 10, brand: 'Brand A', supplier: 'Supplier X', category: 'Category 1' },
  ];

  billings = [];

  constructor() {}

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  addBilling(billing) {
    this.billings.push(billing);
  }

  getBillings() {
    return this.billings;
  }
}
