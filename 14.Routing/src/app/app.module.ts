import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { servercomponent } from '../server/server.component';
import { AppRoutingModule } from './test-route.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,servercomponent,AppRoutingModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
