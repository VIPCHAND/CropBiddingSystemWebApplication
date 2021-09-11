import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincropComponent } from './admincrop.component';

describe('AdmincropComponent', () => {
  let component: AdmincropComponent;
  let fixture: ComponentFixture<AdmincropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
