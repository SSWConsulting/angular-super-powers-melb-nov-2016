import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


export const routes = RouterModule.forChild([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component: HomeComponent}
]);
