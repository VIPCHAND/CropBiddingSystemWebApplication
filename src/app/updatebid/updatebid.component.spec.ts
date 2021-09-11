import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebidComponent } from './updatebid.component';

describe('UpdatebidComponent', () => {
  let component: UpdatebidComponent;
  let fixture: ComponentFixture<UpdatebidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
