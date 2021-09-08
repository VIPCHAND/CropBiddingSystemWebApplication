import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerregistrationComponent } from './farmerregistration.component';

describe('FarmerregistrationComponent', () => {
  let component: FarmerregistrationComponent;
  let fixture: ComponentFixture<FarmerregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
