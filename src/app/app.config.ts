import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from './custom-paginator';
import { MAT_SORT_DEFAULT_OPTIONS } from '@angular/material/sort';
import { PendoService } from './pendo';

export function initializePendoFactory(pendoService: PendoService) {
  return () => pendoService.initPendo();
}

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
  },
  {
      provide: APP_INITIALIZER,
      useFactory: initializePendoFactory,
      deps: [PendoService],
      multi: true
    }
  ],
};
