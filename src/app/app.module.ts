import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { ManualComponent} from './manual/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    ManualComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
