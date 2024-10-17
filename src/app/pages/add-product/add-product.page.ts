import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For navigation after saving
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {

  product = {
    name: '',
    price: null,
    quantity: null,
    brand: '',
    supplier: '',
    oldStock: null,
    category: ''
  };

  constructor(private router: Router,private dataService: DataService, private navCtrl: NavController) {}

 

  // Save product logic
  saveProduct() {
    // Validate form data
    if (this.isFormValid()) {
      // Simulate saving the product (you could connect to a service here)
      console.log('Product saved:', this.product);

      

      // Optionally, navigate to another page, e.g., the product list
      this.dataService.addProduct(this.product);
      // Clear the form after saving
      this.clearForm();
      this.navCtrl.back();
    } else {
      console.error('Please fill out all required fields.');
    }
  }

  // Clear form logic
  clearForm() {
    this.product = {
      name: '',
      price: null,
      quantity: null,
      brand: '',
      supplier: '',
      oldStock: null,
      category: ''
    };
  }
back()
{
  this.clearForm()
  this.navCtrl.back();
}
  // Form validation logic
  isFormValid(): boolean {
    return !!(this.product.name && this.product.price !== null && this.product.quantity !== null &&
      this.product.brand && this.product.supplier && this.product.oldStock !== null && this.product.category);
  }
}
