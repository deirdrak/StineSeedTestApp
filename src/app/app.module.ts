import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryRequestComponent } from './inventory-request/inventory-request.component';
import { ShowInventoryRequestComponent } from './inventory-request/show-inventory-request/show-inventory-request.component';
import { InventoryRequestApiService } from './inventory-request-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InventoryRequestComponent,
    ShowInventoryRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InventoryRequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
