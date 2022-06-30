import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';


@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ComponentsModule
  ]
})
export class ManageModule {
  constructor() {
    console.log("ManageComponent constructor component");
  }
}
