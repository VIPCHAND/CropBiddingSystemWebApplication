import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbidComponent } from './addbid.component';

describe('AddbidComponent', () => {
  let component: AddbidComponent;
  let fixture: ComponentFixture<AddbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
