import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeroFormComponent } from './hero-form/hero-form.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
   
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }