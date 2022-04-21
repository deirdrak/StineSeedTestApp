import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryRequestApiService } from 'src/app/inventory-request-api.service';
import { Request } from 'src/app/models/request';
import { Inventory } from 'src/app/models/inventory';

@Component({
  selector: 'app-show-inventory-request',
  templateUrl: './show-inventory-request.component.html',
  styleUrls: ['./show-inventory-request.component.css']
})
export class ShowInventoryRequestComponent implements OnInit {
  //inventoryList$!:Observable<Inventory[]>;
  //requestsList$!:Observable<Request[]>;
  inventoryArray: Inventory[] = [];
  requestsList : Request[] = [];  
  inventoryNames:string="";
  totalRequestedKernels=0;
  message="";

  constructor(private service:InventoryRequestApiService) { }

  ngOnInit(): void {

    //this.inventoryList$ = this.service.getInventoryInfoList();     

    this.service.getInventoryInfoList().subscribe(inventory=> {
      this.inventoryArray = inventory; 
      
      this.service.getRequestInfoList().subscribe(request=> 
        {this.requestsList  = request;
          this.validateInventoryExistance(this.inventoryArray, this.requestsList);          
        });     
    });
  }

  validateInventoryExistance(inventoryArray2:Inventory[], requestArray:Request[]){
    var totalRequestedKernels=0;
    var alert = document.getElementById("low-inventory-alert"); 

    inventoryArray2.forEach((item)=>{
      totalRequestedKernels = requestArray.filter(req=> req.inventoryId === item.id)
                              .reduce((total, req) => total + req.requestedKernels, 0).valueOf();
      
      if(totalRequestedKernels > item.kernels){
        this.inventoryNames=this.inventoryNames.concat(" "+item.name +",");     
        this.message ="There is not enough inventory of "+ this.inventoryNames.slice(0,-1) +" to satisfy the requested kernels!";               
        
        if(alert){
          alert.style.display="block";
        }     
      }
    });
  }
}

