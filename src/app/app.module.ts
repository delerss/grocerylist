import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GroceryService } from './grocery.service';
import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GroceryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
