import { Routes } from '@angular/router';
import {RegistrerComponent} from "./auth/registrer/registrer.component";
import {LoginComponent} from "./auth/login/login.component";

export const routes: Routes = [
  {
    path: 'register',
    component: RegistrerComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];
