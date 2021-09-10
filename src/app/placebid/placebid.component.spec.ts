import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacebidComponent } from './placebid.component';

describe('PlacebidComponent', () => {
  let component: PlacebidComponent;
  let fixture: ComponentFixture<PlacebidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacebidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
