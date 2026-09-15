import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figma5 } from './figma5';

describe('Figma5', () => {
  let component: Figma5;
  let fixture: ComponentFixture<Figma5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Figma5],
    }).compileComponents();

    fixture = TestBed.createComponent(Figma5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
