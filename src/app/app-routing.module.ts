import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [ {
  path: '',
  component: MenuComponent,
   children: [
  //   // { path: '', pathMatch: 'full', redirectTo: '/reports' },
  //   { path: '', pathMatch: 'full', redirectTo: 'skill' },
  //   {
  //     path: 'home',
  //     loadChildren: () =>
  //       import('./home/home.module').then(
  //         m => m.HomeModule
  //       ),
  //       canActivate: [],
  //   },
  //   {
  //     path: 'contact',
  //     loadChildren: () =>
  //       import('./contact/contact.module').then(
  //         m => m.ContactModule
  //       ),
  //     canActivate: [],
  //   },
  //   {
  //     path: 'skill',
  //     loadChildren: () =>
  //       import('./banner/banner.module').then(
  //         m => m.BannerModule
  //       ),
      
  //   },
  //   {
  //     path: 'about',
  //     loadChildren: () =>
  //       import('./about/about.module').then(
  //         m => m.AboutModule
  //       ),
  //     canActivate: [],
  //   },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
