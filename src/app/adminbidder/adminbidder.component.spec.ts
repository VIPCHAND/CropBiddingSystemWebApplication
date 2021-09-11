import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbidderComponent } from './adminbidder.component';

describe('AdminbidderComponent', () => {
  let component: AdminbidderComponent;
  let fixture: ComponentFixture<AdminbidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
