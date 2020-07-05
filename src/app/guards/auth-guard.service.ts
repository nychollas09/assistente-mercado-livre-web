import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

const REFERENCE_CODE_QUERY_PARAM = 'code';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const { queryParamMap } = route;
    return queryParamMap.has(REFERENCE_CODE_QUERY_PARAM) ? true : false;
  }
}
