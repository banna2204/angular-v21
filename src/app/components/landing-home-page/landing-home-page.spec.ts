import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingHomePage } from './landing-home-page';

describe('LandingHomePage', () => {
  let component: LandingHomePage;
  let fixture: ComponentFixture<LandingHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
