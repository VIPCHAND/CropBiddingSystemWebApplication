import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovebidComponent } from './approvebid.component';

describe('ApprovebidComponent', () => {
  let component: ApprovebidComponent;
  let fixture: ComponentFixture<ApprovebidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovebidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
