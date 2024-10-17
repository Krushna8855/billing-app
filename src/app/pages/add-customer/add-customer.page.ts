import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage {
  customerName: string = '';
  customerGender: string = '';
  customerContact: string = '';
  customerEmail: string = '';
  customer = { name: '', gender: '', contact: '', email: '' };

  constructor(private alertCtrl: AlertController,private dataService: DataService, private navCtrl: NavController) {}

  // Function to save customer details
  saveCustomer() {
    if (this.validateInputs()) {
      const newCustomer = {
        name: this.customerName,
        gender: this.customerGender,
        contact: this.customerContact,
        email: this.customerEmail,
      };

      // Assuming customer data is stored in local storage or service
      // Here we're just logging it for demonstration
      console.log('Customer Added:', newCustomer);

      // Show confirmation message
      this.showAlert('Success', 'Customer has been added successfully.');

      // Clear the form after saving
      this.clearForm();
      this.dataService.addCustomer(newCustomer);
      this.navCtrl.back();
    } else {
      this.showAlert('Error', 'Please fill out all the fields.');
    }
  }

  // Function to cancel customer entry and clear the form
  cancel() {
    this.clearForm();
  }

  // Function to clear the form fields
  clearForm() {
    this.customerName = '';
    this.customerGender = '';
    this.customerContact = '';
    this.customerEmail = '';
  }

  // Function to validate that all required fields are filled
  validateInputs(): boolean {
    return (
      this.customerName.trim() !== '' &&
      this.customerGender.trim() !== '' &&
      this.customerContact.trim() !== '' &&
      this.customerEmail.trim() !== ''
    );
  }

  // Function to show an alert
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
