import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbidsComponent } from './viewbids.component';

describe('ViewbidsComponent', () => {
  let component: ViewbidsComponent;
  let fixture: ComponentFixture<ViewbidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
