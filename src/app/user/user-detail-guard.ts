import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface ComponentCanDeactivate{
    canDeactivate: () => boolean | Observable<boolean>;
}

export class UserDetailGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate>{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        return confirm("Are you sure?");
    }

    canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{
        return component.canDeactivate() ? component.canDeactivate() : true;
    }
}