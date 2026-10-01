import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginator } from './table-paginator';

describe('TablePaginator', () => {
  let component: TablePaginator;
  let fixture: ComponentFixture<TablePaginator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePaginator],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePaginator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
