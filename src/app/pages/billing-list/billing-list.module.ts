import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillingListPageRoutingModule } from './billing-list-routing.module';

import { BillingListPage } from './billing-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillingListPageRoutingModule
  ],
  declarations: [BillingListPage]
})
export class BillingListPageModule {}
