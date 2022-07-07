import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UsersService } from 'src/app/services/users.service';



@NgModule({
  providers: [],
  declarations: [
    DeletedComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DeletedModule { }
