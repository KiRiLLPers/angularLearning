import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page/registration-page.component";


const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'signin', component: LoginPageComponent},
  {path: 'signup', component: RegistrationPageComponent},
  {path: '**', component: LoginPageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
