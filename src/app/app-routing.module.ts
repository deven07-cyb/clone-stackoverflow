import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path:"user",
    loadChildren:() => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path:"front",
    loadChildren:() => import('./front/front.module').then((m) => m.FrontModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
