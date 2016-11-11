import { CompanyListComponent } from './company/company-list/company-list.component';
import { RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component'
import {CompanyEditComponent } from './company/company-edit/company-edit.component';

export const routes = RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    {path: 'company/list', component: CompanyListComponent },
    {path: 'company/detail/:id', component: CompanyDetailComponent},
    {path: 'company/edit/:id', component: CompanyEditComponent}
]);
