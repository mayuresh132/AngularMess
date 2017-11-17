import { HomePageComponent } from './home-page/home-page.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path : '', component: HomePageComponent}
];

export const MyRouterModule = RouterModule.forRoot(routes);
