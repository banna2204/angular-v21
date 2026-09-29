import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPrivacyPage } from './landing-privacy-page';

describe('LandingPrivacyPage', () => {
  let component: LandingPrivacyPage;
  let fixture: ComponentFixture<LandingPrivacyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPrivacyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPrivacyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
