import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {
  customers = [];
  products = [];
  selectedCustomer: any;
  selectedProduct: any;
  selectedQuantity: number;
  billItems = [];
  totalAmount = 0;

  constructor(private dataService: DataService, private navCtrl: NavController) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
    this.products = this.dataService.getProducts();
  }

  // Add selected product to the bill
  addProductToBill() {
    if (this.selectedProduct && this.selectedQuantity > 0) {
      const totalPrice = this.selectedProduct.price * this.selectedQuantity;
      this.billItems.push({
        product: this.selectedProduct,
        quantity: this.selectedQuantity,
        totalPrice: totalPrice,
      });
      this.calculateTotal();
      this.selectedProduct = null; // Reset selection
      this.selectedQuantity = null;
    }
  }

  // Remove a product from the bill
  removeProduct(item) {
    const index = this.billItems.indexOf(item);
    if (index > -1) {
      this.billItems.splice(index, 1);
      this.calculateTotal();
    }
  }

  // Calculate the total amount for the bill
  calculateTotal() {
    this.totalAmount = this.billItems.reduce((acc, item) => acc + item.totalPrice, 0);
  }

  // Save billing information
  saveBilling() {
    if (this.selectedCustomer && this.billItems.length > 0) {
      const billingInfo = {
        customer: this.selectedCustomer,
        items: this.billItems,
        totalAmount: this.totalAmount,
        date: new Date(),
      };
      this.dataService.addBilling(billingInfo);
      this.clearBilling(); // Reset billing form
      this.navCtrl.back(); // Navigate back after saving
    } else {
      alert('Please select a customer and add at least one product to the bill.');
    }
  }

  // Clear billing form
  clearBilling() {
    this.selectedCustomer = null;
    this.billItems = [];
    this.totalAmount = 0;
  }
}
