import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figma4 } from './figma4';

describe('Figma4', () => {
  let component: Figma4;
  let fixture: ComponentFixture<Figma4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Figma4],
    }).compileComponents();

    fixture = TestBed.createComponent(Figma4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
