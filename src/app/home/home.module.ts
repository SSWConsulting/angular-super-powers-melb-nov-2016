import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { routes } from './home.routes'

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports: [ routes]
})
export class HomeModule { }