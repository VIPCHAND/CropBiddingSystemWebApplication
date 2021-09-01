import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderHomePageComponent } from './bidder-home-page.component';

describe('BidderHomePageComponent', () => {
  let component: BidderHomePageComponent;
  let fixture: ComponentFixture<BidderHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
