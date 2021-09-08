import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmycropsComponent } from './viewmycrops.component';

describe('ViewmycropsComponent', () => {
  let component: ViewmycropsComponent;
  let fixture: ComponentFixture<ViewmycropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmycropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmycropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
