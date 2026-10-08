import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingClientPage } from './landing-client-page';

describe('LandingClientPage', () => {
  let component: LandingClientPage;
  let fixture: ComponentFixture<LandingClientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingClientPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingClientPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
