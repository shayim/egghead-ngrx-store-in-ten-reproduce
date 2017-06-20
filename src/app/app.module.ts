import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterSelector } from './components/filter-select';
import { PersonInput } from './components/person-input';
import { PersonList } from "./components/person-list";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, FilterSelector, PersonInput, PersonList],
  bootstrap: [AppComponent]
})
export class AppModule { }
