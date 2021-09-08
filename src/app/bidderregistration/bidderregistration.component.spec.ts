import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderregistrationComponent } from './bidderregistration.component';

describe('BidderregistrationComponent', () => {
  let component: BidderregistrationComponent;
  let fixture: ComponentFixture<BidderregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
