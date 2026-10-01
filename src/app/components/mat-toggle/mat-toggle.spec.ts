import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToggle } from './mat-toggle';

describe('MatToggle', () => {
  let component: MatToggle;
  let fixture: ComponentFixture<MatToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(MatToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
