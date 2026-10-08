import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialComponent } from './material-component';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
