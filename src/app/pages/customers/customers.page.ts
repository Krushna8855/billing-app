import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }
}
