import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { UsersService } from 'src/app/services/users.service';



@NgModule({
  providers: [],
  declarations: [
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule
  ]
})
export class ActiveModule {
  constructor() {
    console.log("ActiveModule constructor");
  }
}