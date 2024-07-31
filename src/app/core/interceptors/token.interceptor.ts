import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthFacade } from '../../facades/auth.facade';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authfacade = inject(AuthFacade);
  return next(req).pipe(
    catchError((err: any) => {
      if (err.error.error.message === 'INVALID_ID_TOKEN') {
        authfacade.logout();
        return throwError(() => err);
      }

      return throwError(() => err);
    })
  );
};
