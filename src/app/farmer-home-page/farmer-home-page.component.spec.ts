import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerHomePageComponent } from './farmer-home-page.component';

describe('FarmerHomePageComponent', () => {
  let component: FarmerHomePageComponent;
  let fixture: ComponentFixture<FarmerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
