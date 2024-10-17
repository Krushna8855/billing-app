import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.page.html',
  styleUrls: ['./billing-list.page.scss'],
})
export class BillingListPage implements OnInit {
  billings = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.billings = this.dataService.getBillings();
  }

  // Edit Billing
  editBilling(billing) {
    // Logic to edit a billing record
  }

  // Delete Billing
  deleteBilling(billing) {
    const index = this.billings.indexOf(billing);
    if (index > -1) {
      this.billings.splice(index, 1);
    }
  }
}
