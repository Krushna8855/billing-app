import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingListPage } from './billing-list.page';

describe('BillingListPage', () => {
  let component: BillingListPage;
  let fixture: ComponentFixture<BillingListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
