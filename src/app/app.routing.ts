import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { Err404Component } from './error/err404/err404.component';
import { USER_ROUTES } from './user/user.routes';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'user', component: UserComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES},
    { path: 'error/404', component:Err404Component},
    { path: '**', redirectTo: '/error/404', pathMatch: 'full'}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);