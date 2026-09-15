import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figma2 } from './figma2';

describe('Figma2', () => {
  let component: Figma2;
  let fixture: ComponentFixture<Figma2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Figma2],
    }).compileComponents();

    fixture = TestBed.createComponent(Figma2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
