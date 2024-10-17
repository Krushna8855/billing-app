import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  totalSales = 0;
  totalRevenue = 0;

  constructor(private dataService: DataService, private router: Router) {}

  // Use ionViewWillEnter to ensure the data is refreshed when the user navigates back to the dashboard
  ionViewWillEnter() {
    this.calculateTotals();
  }

  ngOnInit() {
    this.calculateTotals();
  }

  // Function to calculate total sales and revenue from billing data
  calculateTotals() {
    const billings = this.dataService.getBillings();
    this.totalSales = 0;
    this.totalRevenue = 0;

    billings.forEach(bill => {
      this.totalSales += bill.items.reduce((acc, item) => acc + item.quantity, 0); // Total quantity of items
      this.totalRevenue += bill.totalAmount; // Total revenue from all bills
    });
  }

  // Navigate to Customers Page
  goToCustomers() {
    this.router.navigate(['/customers']);
  }

  // Navigate to Products Page
  goToProducts() {
    this.router.navigate(['/inventory']);
  }

  // Navigate to Billing Page
  goToBilling() {
    this.router.navigate(['/billing']);
  }
}
