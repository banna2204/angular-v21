import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figma3 } from './figma3';

describe('Figma3', () => {
  let component: Figma3;
  let fixture: ComponentFixture<Figma3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Figma3],
    }).compileComponents();

    fixture = TestBed.createComponent(Figma3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
