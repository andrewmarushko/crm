import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveAuthFormComponent } from './form/reactive/r-form.component';

@NgModule({
  declarations: [AppComponent, ReactiveAuthFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ngOnInit(): void {}
}
