import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad,CanActivate,CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(): Observable<boolean> {
    return this.authService.getUserAuthState().pipe(
      map((user) => {
        return user != null;
      }),
      tap((hasUser) => {
        if (!hasUser) {
          this.router.navigate(['auth/login']);
        }
      })
    );
  }
  canActivate(): Observable<boolean> {
    return this.authService.getUserAuthState().pipe(
      map((user) => user != null),
      tap((hasUser) => {
        if (!hasUser) {
          this.router.navigate(['auth/login']);
        }
      })
    );
  }
  canActivateChild(): Observable<boolean> {
    return this.authService.getUserAuthState().pipe(
      map((user) => user != null),
      tap((hasUser) => {
        if (!hasUser) {
          this.router.navigate(['auth/login']);
        }
      })
    );
  }
}
