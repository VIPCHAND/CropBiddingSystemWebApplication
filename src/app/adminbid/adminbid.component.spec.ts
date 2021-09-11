import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbidComponent } from './adminbid.component';

describe('AdminbidComponent', () => {
  let component: AdminbidComponent;
  let fixture: ComponentFixture<AdminbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
