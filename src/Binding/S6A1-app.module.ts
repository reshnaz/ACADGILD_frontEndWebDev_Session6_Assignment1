import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { S6A1Component } from './S6A1-app.component';

// Using component name -- S6A1Component inside @NgModule
@NgModule({
  declarations: [
    S6A1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [S6A1Component]
})
export class S6A1Module { }
