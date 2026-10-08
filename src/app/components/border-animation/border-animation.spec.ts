import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderAnimation } from './border-animation';

describe('BorderAnimation', () => {
  let component: BorderAnimation;
  let fixture: ComponentFixture<BorderAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(BorderAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
