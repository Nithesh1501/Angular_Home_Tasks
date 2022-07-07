import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FullNamePipe } from '../pipes/full-name.pipe';
import { UserStatusPipe } from '../pipes/user-status.pipe';
import { FontColorDirective } from '../directives/font-color.directive';

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    UserDetailsComponent,
    FullNamePipe,
    UserStatusPipe,
    FontColorDirective
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    UsersListComponent,
    UserDetailsComponent
  ]
})
export class ComponentsModule { }
