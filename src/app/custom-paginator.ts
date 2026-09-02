import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {

  override itemsPerPageLabel = 'Rows per page:';
//   override nextPageLabel = 'Next page';
//   override previousPageLabel = 'Previous page';
//   override firstPageLabel = 'First page';
//   override lastPageLabel = 'Last page';


  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number,
  ): string => {
    return `${page * pageSize + 1} - ${(page + 1) * pageSize} of ${length}`;
  };
}