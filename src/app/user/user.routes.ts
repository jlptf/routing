import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailGuard } from './user-detail-guard';

export const USER_ROUTES: Routes = [
    { path: 'detail', component: UserDetailComponent, canActivate:[UserDetailGuard]},
    { path: 'detail', component: UserDetailComponent, canDeactivate:[UserDetailGuard]},
];