import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { ContractService } from '../services/contract.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api.response';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  
  contrats: any;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;
  
  constructor(private contratService: ContractService,
  private router: Router) {
  setTimeout(function(){
  $(function(){
  $('#example').DataTable();
  });
  },2000);
  

  }
  ngOnInit() {
  this.contrats = this.contratService.getAllContracts();
  setTimeout(function(){
  $(function(){
  $('#example').DataTable();
  });
  },2000);
  
  }
  
  deleteContract(id: number) {
  this.contratService.deleteContract(id)
  .subscribe(
  data => {
  console.log(data);
  this.contrats = this.contratService.getAllContracts();
  },
  error => console.log(error));
  }
  
  contractsDetails(id: number){
    this.router.navigate(['contract-details', id]);
  }

  updateContract(id: number){
  this.router.navigate(['update', id]);
  }

  contract: Contract = new Contract();
submitted = false;


onSubmit() {
this.submitted = true;
this.contratService.addContract(this.contract)
.subscribe(data => console.log(data), error => console.log(error));
this.contract = new Contract();
this.router.navigate(['/contracts']);
}
  
  }
    
 
    
