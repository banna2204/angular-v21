import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from './custom-paginator';
import { MAT_SORT_DEFAULT_OPTIONS } from '@angular/material/sort';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  {
    provide: MatPaginatorIntl,
    useClass: CustomPaginatorIntl
  },
  {
    provide: MAT_SORT_DEFAULT_OPTIONS,
    useValue: {
      arrowPosition: 'before'
    }
  }
  ],
};
