import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingSpendingPage } from './landing-spending-page';

describe('LandingSpendingPage', () => {
  let component: LandingSpendingPage;
  let fixture: ComponentFixture<LandingSpendingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSpendingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingSpendingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
