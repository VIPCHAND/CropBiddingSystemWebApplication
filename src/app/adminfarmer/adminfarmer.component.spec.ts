import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfarmerComponent } from './adminfarmer.component';

describe('AdminfarmerComponent', () => {
  let component: AdminfarmerComponent;
  let fixture: ComponentFixture<AdminfarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
