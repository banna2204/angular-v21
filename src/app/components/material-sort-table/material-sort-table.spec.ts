import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSortTable } from './material-sort-table';

describe('MaterialSortTable', () => {
  let component: MaterialSortTable;
  let fixture: ComponentFixture<MaterialSortTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSortTable],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialSortTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
