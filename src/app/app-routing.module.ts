import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActiveComponent } from './modules/active/active.component';
import { DeletedComponent } from './modules/deleted/deleted.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path: 'deleted',
    component: DeletedComponent
  },
  {
    path: 'manage',
    loadChildren: () => import('./modules/manage/manage.module')
      .then(m => m.ManageModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
