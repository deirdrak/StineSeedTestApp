import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from './models/request';
import { Inventory } from './models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryRequestApiService {

  readonly apiURL="https://localhost:7210/api";

  constructor(private http:HttpClient) { }

  getInventoryInfoList(){
    return this.http.get<Inventory[]>(this.apiURL+'/Inventory');
  }

  getRequestInfoList(){
    return this.http.get<Request[]>(this.apiURL+'/Request');
  }
}
