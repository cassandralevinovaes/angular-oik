import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MatInputModule } from '@angular/material/input';
import { FirstDemoComponent } from './first-demo/first-demo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule ],
  declarations: [ AppComponent, HelloComponent, FirstDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
